import { Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Box, InputAdornment, Tooltip, IconButton, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RHFTextField } from "../../../components/hook-form";
import { useToggle } from '../../../hooks';

type Props = {
    t: any,
    isHandling?: boolean,
}

const RegisterForm: React.FC<Props> = ({ t, isHandling }) => {
    const navigate = useNavigate()

    const { toggle: showPass, onToggle: onTogglePass } = useToggle()
    const { toggle: showConfirmPass, onToggle: onToggleConfirmPass } = useToggle()

    return (
        <Stack spacing={5}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {t('title')}
            </Typography>
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
                                <IconButton size='small' onClick={onTogglePass}>
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
                                <IconButton size='small' onClick={onToggleConfirmPass}>
                                    {showConfirmPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    }}
                />
                <LoadingButton
                    size='small'
                    type="submit"
                    variant="contained"
                    loading={isHandling}
                    loadingIndicator={t('form.registerBtn.loadingIndicator')}>
                    {t('form.registerBtn.content')}
                </LoadingButton>
            </Stack>
        </Stack>
    )
}

export default RegisterForm;
