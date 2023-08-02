import { useTranslation } from "react-i18next";
import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from 'notistack'
import { FormProvider } from "../../../components/hook-form";
import { LoginSchema } from "../../../utils/validations/auth/LoginSchema";
import { showErrors } from "../../../utils/validations/validationHelper";
import LoginForm from "./LoginForm";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

const LoginContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'login' })
    const { enqueueSnackbar } = useSnackbar()

    const defaultValues = {
        username: 'Thangla',
        password: '123456a@',
    }
    const methods = useForm({
        resolver: yupResolver(LoginSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError, formState: { errors } } = methods

    const handleLogin = async (data: any) => {
        try {
            await dispatch(authApi.endpoints.login.initiate(data)).unwrap()
            enqueueSnackbar(t('notifications.loginSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.loginFailed'), { variant: 'error' })
            showLoginError(error)
        }
    }

    const showLoginError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return <FormProvider
        methods={methods}
        onSubmit={handleSubmit(handleLogin)}
    >
        <LoginForm t={t} />
    </FormProvider>
}

export default LoginContainer;
