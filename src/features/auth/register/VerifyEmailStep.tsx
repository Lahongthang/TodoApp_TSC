import { useTranslation, Trans } from "react-i18next";
import React, { useState } from "react";
import { Stack, Button, CircularProgress, Typography } from '@mui/material'
import { useFormContext } from "react-hook-form";
import { SubmitButton } from "../../../components/buttons";
import { RHFTextField } from "../../../components/hook-form";
import RootCard from "./RootCard";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

type VerifyEmailStepProps = {
    isHandling: boolean,
    onGoToPrevStep: () => void,
}

const VerifyEmailStep: React.FC<VerifyEmailStepProps> = ({ isHandling, onGoToPrevStep }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'register.verifyEmail' })

    const { getValues } = useFormContext()
    const { email, username, password } = getValues()

    const [isSending, setIsSending] = useState<boolean>(false)

    const handleSendCode = async () => {
        setIsSending(true)
        const bodyData = { username, email, password }
        try {
            await dispatch(authApi.endpoints.verifyAccount.initiate(bodyData)).unwrap()
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
                            <Button
                                size="small"
                                onClick={handleSendCode}>
                                {t('form.sendCodeAgain')}
                            </Button>
                            {isSending && <CircularProgress sx={{
                                width: '15px !important', height: '15px !important',
                            }} />}
                        </Stack>
                        <Button
                            size="small"
                            onClick={onGoToPrevStep}>
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
            <Stack spacing={2.5}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Trans
                        defaults={t('desc', { email })}
                        components={{ custom: <span style={{ fontWeight: 'bold', color: '#000000DE' }} /> }}
                    />
                </Typography>
                <RHFTextField
                    name='verifyCode'
                    label={t('form.verifyCode')}
                />
            </Stack>
        </RootCard>
    )
}

export default VerifyEmailStep;
