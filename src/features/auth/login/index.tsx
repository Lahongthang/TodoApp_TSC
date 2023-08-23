import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardActions } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from 'notistack'
import { FormProvider } from "../../../components/hook-form";
import { LoginSchema } from "../../../utils/validations/auth/LoginSchema";
import { showErrors } from "../../../utils/validations/validationHelper";
import LoginForm from "./LoginForm";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { RootStyle } from "./styles";
import { SubmitButton } from "../../../components/buttons";

const FORM_ID = 'login-form'

const LoginContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'login' })
    const { enqueueSnackbar } = useSnackbar()

    const [isHandling, setIsHandling] = useState<boolean>(false)

    const defaultValues = {
        username: '',
        password: '',
    }
    const methods = useForm({
        resolver: yupResolver(LoginSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError, formState: { errors } } = methods

    const handleLogin = async (data: any) => {
        setIsHandling(true)
        try {
            await dispatch(authApi.endpoints.login.initiate(data)).unwrap()
            enqueueSnackbar(t('notifications.loginSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.loginFailed'), { variant: 'error' })
            showLoginError(error)
        } finally {
            setIsHandling(false)
        }
    }

    const showLoginError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <RootStyle>
            <Card sx={{ width: 1, p: 3 }}>
                <CardHeader title={t('title')} />
                <CardContent>
                    <FormProvider
                        id={FORM_ID}
                        methods={methods}
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        <LoginForm t={t} />
                    </FormProvider>
                </CardContent>
                <CardActions>
                    <SubmitButton
                        fullWidth
                        forForm={FORM_ID}
                        isLoading={isHandling}
                        text={t('form.loginBtn.content')}
                        loadingText={t('form.loginBtn.loadingIndicator')}
                    />
                </CardActions>
            </Card>
        </RootStyle>
    )
}

export default LoginContainer;
