import { useTranslation, Trans } from "react-i18next";
import React, { useState } from "react";
import { Stack, Typography, Button, CircularProgress } from '@mui/material'
import RootCard from "./RootCard";
import { RHFTextField } from "../../components/hook-form";
import { useFormContext } from "react-hook-form";
import { SubmitButton } from "../../components/buttons";
import { dispatch } from "../../app/store";
import { resetPasswordApi } from "../../app/services/reset-password/resetPasswordApi";

type VerifyEmailStepProps = {
    isHandling: boolean,
    onGoToPrevStep: () => void,
}

const VerifyEmailStep: React.FC<VerifyEmailStepProps> = ({ isHandling, onGoToPrevStep }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.verifyEmail'})
    const { getValues } = useFormContext()
    const { email } = getValues()

    const [isSending, setIsSending] = useState<boolean>(false)

    const handleSendCode = async () => {
        setIsSending(true)
        const bodyData = { email }
        try {
            await dispatch(resetPasswordApi.endpoints.sendVerificationCode.initiate(bodyData)).unwrap()
        } catch (error) {
            console.error(error)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <RootCard
            title={t('title')}
            renderActions={() => (
                <Stack spacing={2} sx={{ width: 1 }}>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Stack spacing={2}
                            direction='row'
                            alignItems='center'>
                            <Button size="small" onClick={handleSendCode}>
                                {t('form.sendCodeAgain')}
                            </Button>
                            {isSending && <CircularProgress sx={{
                                width: '15px !important', height: '15px !important',
                            }} />}
                        </Stack>
                        <Button size="small" onClick={onGoToPrevStep}>
                            {t('form.changeEmail')}
                        </Button>
                    </Stack>
                    <SubmitButton
                        fullWidth
                        isLoading={isHandling}
                        text={t('form.submitBtn.content')}
                        loadingText={t('form.submitBtn.loadingIndicator')}
                    />
                </Stack>
            )}
        >
            <Stack spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Trans
                        defaults={t('desc', { email })}
                        components={{ custom: <span style={{ fontWeight: 'bold', color: '#000000DE' }} /> }}
                    />
                </Typography>
                <RHFTextField name='verifyCode' label={t('form.verifyCode')} />
            </Stack>
        </RootCard>
    )
}

export default VerifyEmailStep;
