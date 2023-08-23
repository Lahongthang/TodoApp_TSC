import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../../components/hook-form";
import { SubmitButton } from "../../../../components/buttons";
import useStepValues from "../../../../components/steps/useStepValues";
import StepCard from "../../../../components/steps/StepCard";
import { showErrors } from "../../../../utils/validations/validationHelper";
import { FindAccountSchema } from "../../../../utils/validations/auth/reset-password/FindAccountSchema";
import FindAccountForm from "./FindAccountForm";
import { dispatch } from "../../../../app/store";
import { authApi } from "../../../../app/services/auth/authApi";

const FORM_ID = 'find-account-form'

const FindAccountStep: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.steps.findAccount' })

    const { goToNextStep } = useStepValues()

    const [isHandling, setIsHandling] = useState<boolean>(false)

    const defaultValues = {
        email: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(FindAccountSchema(t)),
    })

    const { handleSubmit, setError } = methods

    const handleFindAccount = async (data: any) => {
        setIsHandling(true)
        const bodyData = { email: data.email }
        try {
            await dispatch(authApi.endpoints.confirmResetPassword.initiate(bodyData)).unwrap()
            goToNextStep(data)
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
                onSubmit={handleSubmit(handleFindAccount)}>
                <FindAccountForm t={t} />
            </FormProvider>
        </StepCard>
    )
}

export default FindAccountStep;
