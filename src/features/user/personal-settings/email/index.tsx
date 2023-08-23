import { useTranslation } from "react-i18next";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from 'notistack'
import { FormProvider } from "../../../../components/hook-form";
import { useAuth } from "../../../../hooks";
import EditEmailCard from "./EditEmailCard";
import { EditEmailSchema } from "../../../../utils/validations/personal-settings/EditEmailSchema";
import { dispatch } from "../../../../app/store";
import { userApi } from "../../../../app/services/user/userApi";
import withConfirmEmail from "../../../../components/withConfirmEmail";

const FORM_ID = 'edit-email-form'

const EditEmailContainer = withConfirmEmail(EditEmailCard)

const EmailManagement: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })
    const { enqueueSnackbar } = useSnackbar()
    const { auth } = useAuth()

    const [openConfirmEmail, setOpenConfirmEmail] = useState<boolean>(false)
    const [isConfirming, setIsConfirming] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const defaultValues = useMemo(() => ({
        oldEmail: auth.user?.email ?? '',
        newEmail: '',
        confirmCode: '',
    }), [auth.user?.email])

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(EditEmailSchema(t, openConfirmEmail))
    })

    const { handleSubmit, getValues, resetField, setValue } = methods

    const handleFormSubmit = () => {
        if (openConfirmEmail) handleChangeEmail()
        else handleConfirmEmail()
    }

    const handleConfirmEmail = async () => {
        setIsConfirming(true)
        const data = getValues()
        const bodyData = { email: data.newEmail }
        try {
            await dispatch(userApi.endpoints.confirmChangeEmail.initiate(bodyData)).unwrap()
            setOpenConfirmEmail(true)
        } catch (error) {
            console.error(error)
        } finally {
            setIsConfirming(false)
        }
    }

    const handleChangeEmail = async () => {
        setIsSubmitting(true)
        const data = getValues()
        const bodyData = { email: data.newEmail, confirmCode: data.confirmCode }
        try {
            await dispatch(userApi.endpoints.changeEmail.initiate(bodyData)).unwrap()
            setValue('oldEmail', data.newEmail)
            resetField('newEmail')
            setOpenConfirmEmail(false)
            enqueueSnackbar(t('notifications.changeEmailSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.changeEmailFailed'), { variant: 'error' })
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <FormProvider
            id={FORM_ID}
            methods={methods}
            onSubmit={handleSubmit(handleFormSubmit)}>
            <EditEmailContainer
                t={t}
                formId={FORM_ID}
                isConfirming={isConfirming}
                isSubmitting={isSubmitting}
                showConfirm={openConfirmEmail}
                onSendMail={handleConfirmEmail}
                onCloseConfirm={() => setOpenConfirmEmail(false)}
            />
        </FormProvider>
    )
}

export default EmailManagement;
