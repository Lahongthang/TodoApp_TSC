import { useTranslation, Trans } from 'react-i18next'
import React from "react";
import { Stack, InputAdornment, IconButton, Link, Typography, Tooltip } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggle } from "../../../hooks";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { LoginSchema } from "../../../utils/validations/auth/LoginSchema";
import { LoadingButton } from "@mui/lab";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { showErrors } from '../../../utils/validations/validationHelper';

const FORM_ID = 'login-form'

const LoginForm: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'login' })
    const { toggle: show, onToggle } = useToggle()

    return (
        <Stack spacing={3}>
            <Typography variant='body2'>
                <Trans
                    defaults={t('noAccount', { action: t('createAccount') })}
                    components={{
                        custom: <span style={{
                            color: '#00ab55',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }} />
                    }}
                />
            </Typography>
            <RHFTextField
                name="username"
                label={t('form.username')}
            />
            <RHFTextField
                name="password"
                label={t('form.password')}
                type={show ? 'text' : 'password'}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <Tooltip title={t(`form.${show ? 'hidePassword' : 'showPassword'}`)} placement='top'>
                            <IconButton onClick={onToggle}>
                                {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                }}
            />
            <Link href="" variant="body2" alignSelf='flex-end'>
                {t('form.forgotPassword')}
            </Link>
            <LoadingButton size='small' type="submit" variant="contained">
                {t('form.loginBtn')}
            </LoadingButton>
        </Stack>
    )
}

const LoginFormContainer: React.FC = () => {
    const defaultValues = {
        username: '',
        password: '',
    }
    const methods = useForm({
        resolver: yupResolver(LoginSchema()),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError, formState: { errors } } = methods
    console.log('errors: ', errors)

    const handleLogin = async (data: any) => {
        try {
            await dispatch(authApi.endpoints.login.initiate(data)).unwrap()
        } catch (error) {
            showLoginError(error)
        }
    }

    const showLoginError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
        else {
            alert('Login Failed')
        }
    }

    return <FormProvider id={FORM_ID}
        methods={methods}
        onSubmit={handleSubmit(handleLogin)}
    >
        <LoginForm />
    </FormProvider>
}

export default LoginFormContainer;
