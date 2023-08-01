import { useTranslation, Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Box, InputAdornment, Tooltip, IconButton, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import { useToggle } from '../../../hooks';
import { RegisterSchema } from '../../../utils/validations/auth/RegisterSchema';
import { dispatch } from '../../../app/store';
import { authApi } from '../../../app/services/auth/authApi';
import { showErrors } from '../../../utils/validations/validationHelper';

const FORM_ID = 'register-form'

type Props = {
    t: any
}

const RegisterForm: React.FC<Props> = ({ t }) => {
    const navigate = useNavigate()

    const { toggle: showPass, onToggle: onTogglePass } = useToggle()
    const { toggle: showConfirmPass, onToggle: onToggleConfirmPass } = useToggle()

    return (
        <Stack spacing={3}>
            <Typography variant='body2'>
                <Trans
                    defaults={t('haveAccount', { action: t('signIn') })}
                    components={{
                        custom: <Box component='span'
                            onClick={() => navigate('/login')}
                            sx={{
                                color: '#00ab55',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        />
                    }}
                />
            </Typography>
            <RHFTextField
                name="username"
                label={t('form.username')}
            />
            <RHFTextField
                name="email"
                label={t('form.email')}
            />
            <RHFTextField
                name="password"
                label={t('form.password')}
                type={showPass ? 'text' : 'password'}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <Tooltip title={t(`form.${showPass ? 'hidePassword' : 'showPassword'}`)} placement='top'>
                            <IconButton onClick={onTogglePass}>
                                {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                }}
            />
            <RHFTextField
                name="confirmPassword"
                label={t('form.confirmPassword')}
                type={showConfirmPass ? 'text' : 'password'}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <Tooltip title={t(`form.${showConfirmPass ? 'hidePassword' : 'showPassword'}`)} placement='top'>
                            <IconButton onClick={onToggleConfirmPass}>
                                {showConfirmPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                }}
            />
            <LoadingButton size='small' type="submit" variant="contained">
                {t('form.registerBtn')}
            </LoadingButton>
        </Stack>
    )
}

const RegisterFormContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    
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
            navigate('/login')
        } catch (error) {
            showRegisterError(error)
        }
    }

    const showRegisterError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
        else {
            alert('Register Failed')
        }
    }

    return (
        <FormProvider id={FORM_ID}
            methods={methods}
            onSubmit={handleSubmit(handleRegister)}>
            <RegisterForm t={t} />
        </FormProvider>
    )
}

export default RegisterFormContainer;
