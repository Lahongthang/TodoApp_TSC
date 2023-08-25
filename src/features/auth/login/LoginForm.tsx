import { Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Typography, Alert } from "@mui/material";
import { RHFTextField } from "../../../components/hook-form";
import { LinkButton } from '../../../components/buttons';
import { RHFPasswordTextField } from '../../../components/customs/text-field';

type Props = {
    t: any,
}

const DemoAcc = {
    username: 'demo@gmail.com',
    password : '11111111'
}

const LoginForm: React.FC<Props> = ({ t }) => {
    const navigate = useNavigate()

    return (
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
            <RHFPasswordTextField
                name="password"
                label={t('form.password')}
            />
            <Stack direction='row'>
                <LinkButton
                    to='/reset-password'
                    text={t('form.forgotPassword')}
                />
            </Stack>
        </Stack>
    )
}

export default LoginForm;
