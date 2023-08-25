import { useTranslation } from "react-i18next";
import React from "react";
import useStepper from "../../hooks/useStepper";
import { FormProvider } from "../../components/hook-form";
import { useForm } from "react-hook-form";
import { RootStyle } from "./styles";
import FindAccountStep from "./FindAccountStep";
import VerifyEmailStep from "./VerifyEmailStep";
import ChangePasswordStep from "./ChangePasswordStep";
import { dispatch } from "../../app/store";
import { resetPasswordApi } from "../../app/services/reset-password/resetPasswordApi";
import { showErrors } from "../../utils/validations/validationHelper";
import CompleteCard from "./CompleteCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "../../utils/validations/reset-password/ResetPasswordSchema";

const ResetPasswordContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword' })

    const { activeStep, goToNextStep, goToPrevStep } = useStepper()

    const defaultValues = {
        email: '',
        verifyCode: '',
        newPassword: '',
        confirmPassword: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(ResetPasswordSchema(t, activeStep))
    })

    const { handleSubmit, setError, formState: { isSubmitting } } = methods

    const handleFormSubmit = async (data: any) => {
        switch (activeStep) {
            case 0:
                await handleFindAccount(data)
                break
            case 1:
                await handleVerifyEmail(data)
                break
            case 2:
                await handleChangePassword(data)
                break
            default:
        }
    }

    const handleFindAccount = async (data: any) => {
        const bodyData = { email: data.email }
        try {
            await dispatch(resetPasswordApi.endpoints.sendVerificationCode.initiate(bodyData)).unwrap()
            goToNextStep()
        } catch (error) {
            showResError(error)
            console.error(error)
        }
    }

    const handleVerifyEmail = async (data: any) => {
        const bodyData = { email: data.email, verifyCode: data.verifyCode }
        try {
            await dispatch(resetPasswordApi.endpoints.checkVerificationCode.initiate(bodyData)).unwrap()
            goToNextStep()
        } catch (error) {
            showResError(error)
            console.error(error)
        }
    }

    const handleChangePassword = async (data: any) => {
        const bodyData = { email: data.email, newPassword: data.newPassword }
        try {
            await dispatch(resetPasswordApi.endpoints.changeNewPassword.initiate(bodyData)).unwrap()
            goToNextStep()
        } catch (error) {
            showResError(error)
            console.error(error)
        }
    }

    const showResError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <RootStyle>
            <FormProvider
                methods={methods}
                onSubmit={handleSubmit(handleFormSubmit)}>
                {activeStep === 0 && <FindAccountStep isHandling={isSubmitting} />}
                {activeStep === 1 && <VerifyEmailStep isHandling={isSubmitting} onGoToPrevStep={goToPrevStep} />}
                {activeStep === 2 && <ChangePasswordStep isHandling={isSubmitting} />}
                {activeStep === 3 && <CompleteCard />}
            </FormProvider>
        </RootStyle>
    )
}

export default ResetPasswordContainer;
