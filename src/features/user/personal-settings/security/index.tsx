import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from 'notistack'
import SecurityCard from "./SecurityCard";
import { FormProvider } from "../../../../components/hook-form";
import { SecuritySchema } from "../../../../utils/validations/personal-settings/SecuritySchema";
import { dispatch } from "../../../../app/store";
import { userApi } from "../../../../app/services/user/userApi";
import { showErrors } from "../../../../utils/validations/validationHelper";

const SecurityContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })
    const { enqueueSnackbar } = useSnackbar()

    const [isHandling, setIsHandling] = useState<boolean>(false)

    const defaultValues = {
        oldPassword: '',
        newPassword : '',
        confirmPassword: '',
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(SecuritySchema(t))
    })

    const { handleSubmit, setError, reset } = methods

    const handleChangePassword = async (data: any) => {
        setIsHandling(true)
        const { oldPassword, newPassword } = data
        const bodyData = { oldPassword, newPassword }
        try {
            await dispatch(userApi.endpoints.changePassword.initiate(bodyData)).unwrap()
            enqueueSnackbar(t('notifications.changePasswordSuccessed'))
            reset()
        } catch (error) {
            enqueueSnackbar(t('notifications.changePasswordFailed'), { variant: 'error' })
            showChangePasswordError(error)
            console.error(error)
        } finally {
            setIsHandling(false)
        }
    }

    const showChangePasswordError = (error: any) => {
        const { status } = error
        if (status === 422) {
            showErrors(error.data.error, setError)
        }
    }

    return (
        <FormProvider
            methods={methods}
            onSubmit={handleSubmit(handleChangePassword)}
        >
            <SecurityCard t={t} isHandling={isHandling} />
        </FormProvider>
    )
}

export default SecurityContainer;
