import { useTranslation } from "react-i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../components/hook-form";
import { RegisterSchema } from "../../../utils/validations/auth/RegisterSchema";
import { showErrors } from "../../../utils/validations/validationHelper";
import RegisterForm from "./RegisterForm";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";

const RegisterConttainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    
    const navigate = useNavigate()

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const methods = useForm({
        resolver: yupResolver(RegisterSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setError} = methods

    const handleRegister = async (data: any) => {
        const bodyData = (({confirmPassword, ...rest}) => rest)(data)
        try {
            await dispatch(authApi.endpoints.register.initiate(bodyData)).unwrap()
            navigate('/login')
        } catch (error) {
            showRegisterError(error)
        }
    }

    const showRegisterError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
        else {
            alert('Register Failed')
        }
    }

    return (
        <FormProvider
            methods={methods}
            onSubmit={handleSubmit(handleRegister)}>
            <RegisterForm t={t} />
        </FormProvider>
    )
}

export default RegisterConttainer;
