import React from "react";
import { Stack, Typography } from '@mui/material'
import { LinkButton, SubmitButton } from "../../components/buttons";
import { RHFTextField } from "../../components/hook-form";
import RootCard from "./RootCard";
import { useTranslation } from "react-i18next";

type FindAccountStepProps = {
    isHandling: boolean,
}

const FindAccountStep: React.FC<FindAccountStepProps> = ({ isHandling }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.findAccount'})

    return (
        <RootCard
            title={t('title')}
            renderActions={() => (
                <SubmitButton
                    fullWidth
                    isLoading={isHandling}
                    text={t('form.submitBtn.content')}
                    loadingText={t('form.submitBtn.loadingIndicator')}
                />
            )}
        >
            <Stack spacing={2.5}>
                <Typography variant="body2">
                    {t('desc')}
                </Typography>
                <RHFTextField name='email' label={t('form.email')} />
                <Stack direction='row'>
                    <LinkButton text={t('form.signIn')} to="/login" />
                </Stack>
            </Stack>
        </RootCard>
    )
}

export default FindAccountStep;
