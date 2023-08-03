import { Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Box, InputAdornment, IconButton, Link, Typography, Tooltip, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useToggle } from "../../../hooks";
import { RHFTextField } from "../../../components/hook-form";
import { LoadingButton } from "@mui/lab";

type Props = {
    t: any,
    isHandling?: boolean,
}

const LoginForm: React.FC<Props> = ({ t, isHandling = false }) => {
    const navigate = useNavigate()
    const { toggle: showPass, onToggle: onToggleShowPass } = useToggle()
    const { toggle: remember, onToggle: onToggleRemember } = useToggle()

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
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox
                        size='small'
                        checked={remember}
                        onChange={onToggleRemember}
                    />}
                    label={<Typography variant='body2'>{t('form.remember')}</Typography>}
                />
            </FormGroup>
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
    )
}

export default LoginForm;
