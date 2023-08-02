import { useTranslation } from "react-i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../components/hook-form";
import { RegisterSchema } from "../../../utils/validations/auth/RegisterSchema";
import { showErrors } from "../../../utils/validations/validationHelper";
import RegisterForm from "./RegisterForm";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

const RegisterConttainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    const { enqueueSnackbar } = useSnackbar()
    
    const navigate = useNavigate()

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const methods = useForm({
        resolver: yupResolver(RegisterSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError} = methods

    const handleRegister = async (data: any) => {
        const bodyData = (({confirmPassword, ...rest}) => rest)(data)
        try {
            await dispatch(authApi.endpoints.register.initiate(bodyData)).unwrap()
            enqueueSnackbar(t('notifications.successed'))
            navigate('/login')
        } catch (error) {
            enqueueSnackbar(t('notifications.failed'), { variant: 'error' })
            showRegisterError(error)
        }
    }

    const showRegisterError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <FormProvider
            methods={methods}
            onSubmit={handleSubmit(handleRegister)}>
            <RegisterForm t={t} />
        </FormProvider>
    )
}

export default RegisterConttainer;