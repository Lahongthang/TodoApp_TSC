import { useTranslation, Trans } from "react-i18next";
import React from "react";
import { Stack, Typography, Box } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../components/buttons";
import { RHFTextField } from "../../../components/hook-form";
import { RHFPasswordTextField } from "../../../components/customs/text-field";
import RootCard from "./RootCard";

type CreateAccountStepProps = {
    isHandling: boolean,
}

const CreateAccountStep: React.FC<CreateAccountStepProps> = ({ isHandling }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'register.createAccount' })
    const navigate = useNavigate()

    return (
        <RootCard
            title={t('title')}
            renderActions={() => (
                <SubmitButton
                    fullWidth
                    isLoading={isHandling}
                    text={t('form.registerBtn.content')}
                    loadingText={t('form.registerBtn.loadingIndicator')}
                />
            )}
        >
            <Stack spacing={2.5}> 
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
                <RHFPasswordTextField
                    name="password"
                    label={t('form.password')}
                />
                <RHFPasswordTextField
                    name="confirmPassword"
                    label={t('form.confirmPassword')}
                />
            </Stack>
        </RootCard>
    )
}

export default CreateAccountStep;
