import { Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Box, InputAdornment, IconButton, Link, Typography, Tooltip, Alert } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useToggle } from "../../../hooks";
import { RHFTextField } from "../../../components/hook-form";
import { LoadingButton } from "@mui/lab";

type Props = {
    t: any,
    isHandling?: boolean,
}

const DemoAcc = {
    username: 'demo@gmail.com',
    password : '11111111'
}

const LoginForm: React.FC<Props> = ({ t, isHandling = false }) => {
    const navigate = useNavigate()
    const { toggle: showPass, onToggle: onToggleShowPass } = useToggle()

    return (
        <Stack spacing={5} justifyContent='center' sx={{ height: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {t('title')}
            </Typography>
            <Stack spacing={3}>
                <Typography variant='body2'>
                    <Trans
                        defaults={t('noAccount', { action: t('createAccount') })}
                        components={{
                            custom: <Box component='span'
                                onClick={() => navigate('/register')}
                                sx={{
                                    color: '#00ab55',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                            />
                        }}
                    />
                </Typography>
                <Alert severity='info' sx={{ borderRadius: 2, px: 1 }}>
                    <Stack>
                        <Typography variant='subtitle2'>
                            Demo Account:
                        </Typography>
                        <Typography>
                            Username: <span style={{ fontWeight: 'bold' }}>{DemoAcc.username}</span> / password: <span style={{ fontWeight: 'bold' }}>{DemoAcc.password}</span>
                        </Typography>
                    </Stack>
                </Alert>
                <RHFTextField
                    name="username"
                    label={t('form.username')}
                />
                <RHFTextField
                    name="password"
                    label={t('form.password')}
                    type={showPass ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <Tooltip title={t(`form.${showPass ? 'hidePassword' : 'showPassword'}`)} placement='top'>
                                <IconButton size='small' onClick={onToggleShowPass}>
                                    {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    }}
                />
                <Link href="" variant="body2" alignSelf='flex-end'>
                    {t('form.forgotPassword')}
                </Link>
                <LoadingButton
                    size='small'
                    type="submit"
                    variant="contained"
                    loading={isHandling}
                    loadingIndicator={t('form.loginBtn.loadingIndicator')}>
                    {t('form.loginBtn.content')}
                </LoadingButton>
            </Stack>
        </Stack>
    )
}

export default LoginForm;
