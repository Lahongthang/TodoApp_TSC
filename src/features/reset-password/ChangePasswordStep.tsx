import { useTranslation } from "react-i18next";
import React from "react";
import { Stack, Typography } from '@mui/material'
import RootCard from "./RootCard";
import { SubmitButton } from "../../components/buttons";
import { RHFPasswordTextField } from "../../components/customs/text-field";

type ChangePasswordStepProps = {
    isHandling: boolean,
}

const ChangePasswordStep: React.FC<ChangePasswordStepProps> = ({ isHandling }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.changePassword' })

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
            <Stack spacing={2} sx={{ width: 1 }} justifyContent='center'>
                <Typography variant="body2">
                    {t('desc')}
                </Typography>
                <RHFPasswordTextField
                    name='newPassword'
                    label={t('form.newPassword')}
                />
                <RHFPasswordTextField
                    name='confirmPassword'
                    label={t('form.confirmPassword')}
                />
            </Stack>
        </RootCard>
    )
}

export default ChangePasswordStep;
