import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { CircularProgress, Stack, Button } from "@mui/material";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../../components/hook-form";
import useStepValues from "../../../../components/steps/useStepValues";
import { SubmitButton } from "../../../../components/buttons";
import StepCard from "../../../../components/steps/StepCard";
import { showErrors } from "../../../../utils/validations/validationHelper";
import { VerifyEmailSchema } from "../../../../utils/validations/auth/reset-password/VerifyEmailSchema";
import VerifyEmailForm from "./VerifyEmailForm";
import { dispatch } from "../../../../app/store";
import { authApi } from "../../../../app/services/auth/authApi";

const FORM_ID = 'verify-email-form'

const VerifyEmailStep: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.steps.verifyEmail' })

    const { goToPrevStep, goToNextStep, getStepValues } = useStepValues()
    const { email } = getStepValues(0)

    const [isSending, setIsSending] = useState<boolean>(false)
    const [isHandling, setIsHandling] = useState<boolean>(false)

    const defaultValues = {
        verifyCode: ''
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(VerifyEmailSchema(t)),
    })

    const { handleSubmit, setError } = methods

    const handleSendCode = async () => {
        setIsSending(true)
        const bodyData = { email }
        try {
            await dispatch(authApi.endpoints.confirmResetPassword.initiate(bodyData)).unwrap()
        } catch (error) {
            console.error(error)
        } finally {
            setIsSending(false)
        }
    }

    const handleVerifyEmail = async (data: any) => {
        setIsHandling(true)
        const bodyData = { email, verifyCode: data.verifyCode }
        try {
            await dispatch(authApi.endpoints.verifyResetPasswordCode.initiate(bodyData)).unwrap()
            goToNextStep()
        } catch (error) {
            showResError(error)
            console.error(error)
        } finally {
            setIsHandling(false)
        }
    }

    const showResError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <StepCard sx={{ width: 1, p: 3 }}
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
                            onClick={goToPrevStep}>
                            {t('form.changeEmail')}
                        </Button>
                    </Stack>
                    <SubmitButton
                        fullWidth
                        forForm={FORM_ID}
                        isLoading={isHandling}
                        text={t('form.submitBtn.content')}
                        loadingText={t('form.submitBtn.loadingIndicator')}
                    />
                </Stack>
            )}
        >
            <FormProvider
                id={FORM_ID}
                methods={methods}
                onSubmit={handleSubmit(handleVerifyEmail)}>
                <VerifyEmailForm t={t} />
            </FormProvider>
        </StepCard>
    )
}

export default VerifyEmailStep;
