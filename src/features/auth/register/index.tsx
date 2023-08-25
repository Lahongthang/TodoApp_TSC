import { useTranslation } from "react-i18next";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../components/hook-form";
import useStepper from "../../../hooks/useStepper";
import { showErrors } from "../../../utils/validations/validationHelper";
import { RegisterSchema } from "../../../utils/validations/auth/RegisterSchema";
import CreateAccountStep from "./CreateAccountStep";
import VerifyEmailStep from "./VerifyEmailStep";
import CompleteCard from "./CompleteCard";
import { RootStyle } from "./styles";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

const RegisterContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    const { activeStep, goToNextStep, goToPrevStep } = useStepper()

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        verifyCode: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(RegisterSchema(t, activeStep))
    })

    const { handleSubmit, setError, getValues, formState: { isSubmitting } } = methods

    const handleFormSubmit = async (data: any) => {
        switch (activeStep) {
            case 0:
                await handleVerifyAccount(data)
                break
            case 1:
                await handleRegister(data)
                break
            default:
        }
    }

    const handleVerifyAccount = async (data: any) => {
        const bodyData = {
            username: data.username,
            email: data.email,
            password: data.password,
        }
        try {
            await dispatch(authApi.endpoints.verifyAccount.initiate(bodyData)).unwrap()
            goToNextStep()
        } catch (error) {
            showResError(error)
            console.error(error)
        }
    }

    const handleRegister = async (data: any) => {
        const bodyData = (({confirmPassword, ...rest}) => rest)(data)
        try {
            await dispatch(authApi.endpoints.register.initiate(bodyData)).unwrap()
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
                {activeStep === 0 && <CreateAccountStep isHandling={isSubmitting} />}
                {activeStep === 1 && <VerifyEmailStep isHandling={isSubmitting} onGoToPrevStep={goToPrevStep} />}
                {activeStep === 2 && <CompleteCard data={getValues()} />}
            </FormProvider>
        </RootStyle>
    )
}

export default RegisterContainer;
