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
import ConfirmCard from "./ConfirmCard";
import RegisterCard from "./RegisterCard";
import CompleteCard from "./CompleteCard";

const FORM_ID = 'register-form'

const RegisterConttainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    const { enqueueSnackbar } = useSnackbar()

    const [isHandling, setIsHandling] = useState<boolean>(false)
    const [openConfirmEmail, setOpenConfirmEmail] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirmCode: '',
    }
    const methods = useForm({
        resolver: yupResolver(RegisterSchema(t, openConfirmEmail)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError, getValues } = methods

    const handleFormSubmit = () => {
        if (openConfirmEmail) handleRegister()
        else handleConfirmEmail()
    }

    const handleConfirmEmail = async () => {
        setIsHandling(true)
        const data = getValues()
        const { username, email, password } = data ?? {}
        const bodyData = { username, email, password }
        try {
            await dispatch(authApi.endpoints.confirmEmail.initiate(bodyData)).unwrap()
            setOpenConfirmEmail(true)
        } catch (error) {
            showRegisterError(error)
        } finally {
            setIsHandling(false)
        }
    }

    const handleRegister = async () => {
        setIsHandling(true)
        const data = getValues()
        const bodyData = (({confirmPassword, ...rest}) => rest)(data)
        try {
            await dispatch(authApi.endpoints.register.initiate(bodyData)).unwrap()
            setOpenConfirmEmail(false)
            setIsSuccess(true)
            enqueueSnackbar(t('notifications.registerSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.registerFailed'), { variant: 'error' })
            showRegisterError(error)
        } finally {
            setIsHandling(false)
        }
    }

    const showRegisterError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <>
            {!isSuccess ? (
                <FormProvider id={FORM_ID}
                    methods={methods}
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    {!openConfirmEmail ? (
                        <RegisterCard t={t} isHandling={isHandling} />
                    ) : (
                        <ConfirmCard t={t}
                            forForm={FORM_ID}
                            onSendMailAgain={handleConfirmEmail}
                            onCloseConfirm={() => setOpenConfirmEmail(false)}
                            isHandling={isHandling}
                        />
                    )}
                </FormProvider>
            ) : (
                <CompleteCard t={t} data={getValues()} />
            )}
        </>
    )
}

export default RegisterConttainer;
