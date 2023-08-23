import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useSnackbar } from 'notistack'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../components/hook-form";
import { RegisterSchema } from "../../../utils/validations/auth/RegisterSchema";
import { showErrors } from "../../../utils/validations/validationHelper";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import RegisterCard from "./RegisterCard";
import CompleteCard from "./CompleteCard";
import { Box } from "@mui/material";
import withConfirmEmail from "../../../components/withConfirmEmail";

const FORM_ID = 'register-form'

const RegistrationContainer = withConfirmEmail(RegisterCard)

const RegisterManagement: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    const { enqueueSnackbar } = useSnackbar()

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isConfirming, setIsConfirming] = useState<boolean>(false)
    const [openConfirmAccount, setOpenConfirmAccount] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirmCode: '',
    }
    const methods = useForm({
        resolver: yupResolver(RegisterSchema(t, openConfirmAccount)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError, getValues } = methods

    const handleFormSubmit = () => {
        if (openConfirmAccount) handleRegister()
        else handleConfirmAccount()
    }

    const handleConfirmAccount = async () => {
        setIsConfirming(true)
        const data = getValues()
        const { username, email, password } = data ?? {}
        const bodyData = { username, email, password }
        try {
            await dispatch(authApi.endpoints.confirmRegister.initiate(bodyData)).unwrap()
            setOpenConfirmAccount(true)
        } catch (error) {
            showRegisterError(error)
        } finally {
            setIsConfirming(false)
        }
    }

    const handleRegister = async () => {
        setIsSubmitting(true)
        const data = getValues()
        const bodyData = (({confirmPassword, ...rest}) => rest)(data)
        try {
            await dispatch(authApi.endpoints.register.initiate(bodyData)).unwrap()
            setOpenConfirmAccount(false)
            setIsSuccess(true)
            enqueueSnackbar(t('notifications.registerSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.registerFailed'), { variant: 'error' })
            showRegisterError(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const showRegisterError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <Box sx={{ height: 1 }}>
            {!isSuccess ? (
                <FormProvider id={FORM_ID}
                    methods={methods}
                    style={{ height: '100%' }}
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    <RegistrationContainer t={t}
                        formId={FORM_ID}
                        isSubmitting={isSubmitting}
                        isConfirming={isConfirming}
                        onCloseConfirm={() => setOpenConfirmAccount(false)}
                        showConfirm={openConfirmAccount}
                        onSendMail={handleConfirmAccount}
                    />
                </FormProvider>
            ) : (
                <CompleteCard t={t} data={getValues()} />
            )}
        </Box>
    )
}

export default RegisterManagement;
