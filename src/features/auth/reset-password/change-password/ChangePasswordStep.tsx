import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitButton } from "../../../../components/buttons";
import { FormProvider } from "../../../../components/hook-form";
import StepCard from "../../../../components/steps/StepCard";
import useStepValues from "../../../../components/steps/useStepValues";
import { showErrors } from "../../../../utils/validations/validationHelper";
import { ChangePasswordSchema } from "../../../../utils/validations/auth/reset-password/ChangePasswordSchema";
import ChangePasswordForm from "./ChangePasswordForm";
import { dispatch } from "../../../../app/store";
import { authApi } from "../../../../app/services/auth/authApi";
import CompleteCard from "./CompleteCard";

const FORM_ID = 'reset-password-form'

const ChangePasswordStep: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.steps.changePassword' })

    const { getStepValues } = useStepValues()
    const { email } = getStepValues(0)

    const [isHandling, setIsHandling] = useState<boolean>(false)
    const [isCompleted, setIsCompleted] = useState<boolean>(false)

    const defaultValues = {
        newPassword: '',
        confirmPassword: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(ChangePasswordSchema(t))
    })

    const { handleSubmit, setError } = methods

    const handleResetPassword = async (data: any) => {
        setIsHandling(true)
        const bodyData = { email, newPassword: data.newPassword }
        try {
            await dispatch(authApi.endpoints.resetPassword.initiate(bodyData)).unwrap()
            setIsCompleted(true)
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
        <>
            {!isCompleted ? <StepCard sx={{ width: 1, p: 3 }}
                title={t('title')}
                renderActions={() => (
                    <SubmitButton
                        fullWidth
                        forForm={FORM_ID}
                        isLoading={isHandling}
                        text={t('form.submitBtn.content')}
                        loadingText={t('form.submitBtn.loadingIndicator')}
                    />
                )}
            >
                <FormProvider
                    id={FORM_ID}
                    methods={methods}
                    onSubmit={handleSubmit(handleResetPassword)}>
                    <ChangePasswordForm t={t} />
                </FormProvider>
            </StepCard> : <CompleteCard t={t} />}
        </>
    )
}

export default ChangePasswordStep;
