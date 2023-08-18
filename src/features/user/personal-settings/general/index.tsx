import { useTranslation } from "react-i18next";
import React, { useCallback, useMemo, useState } from "react";
import { Grid } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../../components/hook-form";
import GeneralCard from "./GeneralCard";
import { useAuth } from "../../../../hooks";
import { dispatch } from "../../../../app/store";
import { userApi } from "../../../../app/services/user/userApi";
import { GeneralSchema } from "../../../../utils/validations/personal-settings/GeneralSchema";
import AvatarCard from "./AvatarCard";

const GeneralContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })
    const { enqueueSnackbar } = useSnackbar()
    const { auth } = useAuth()

    const [isAvatarUpdating, setIsAvatarUpdating] = useState<boolean>(false)
    const [isProfileUpdating, setIsProfileUpdating] = useState<boolean>(false)

    const defaultValues = useMemo(() => ({
        file: null,
        avatar: auth.user?.avatar ?? '',
        username: auth.user?.username ?? '',
        phone: auth.user?.phone ?? '',
        address: auth.user?.address ?? '',
        about: auth.user?.about ?? '',
    }), [auth.user])

    const methods = useForm({
        resolver: yupResolver(GeneralSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })

    const { handleSubmit, setValue, resetField } = methods

    const handleDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0]
        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        });
        if (file) {
            setValue('avatar', newFile)
            setValue('file', file)
        }
    }, [setValue])

    const updateProfile = async (data: any) => {
        setIsProfileUpdating(true)
        const { username, phone, address, about } = data
        const bodyData = {
            username,
            phone: phone.replaceAll('-', ''),
            address,
            about
        }
        try {
            await dispatch(userApi.endpoints.updateProfile.initiate(bodyData)).unwrap()
            enqueueSnackbar(t('notifications.updateInfoSuccessed'))
        } catch (error) {
            resetField('username')
            resetField('phone')
            resetField('address')
            resetField('about')
            enqueueSnackbar(t('notifications.updateInfoFailed'), { variant: 'error' })
            console.error(error)
        } finally {
            setIsProfileUpdating(false)
        }
    }

    const updateAvatar = async (data: any) => {
        if (!data.file) return
        setIsAvatarUpdating(true)
        const formData = new FormData()
        formData.append('avatar', data.file)
        try {
            await dispatch(userApi.endpoints.updateAvatar.initiate(formData)).unwrap()
            enqueueSnackbar(t('notifications.updateInfoSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.updateInfoFailed'), { variant: 'error' })
            resetField('avatar')
            console.error(error)
        } finally {
            setIsAvatarUpdating(false)
            setValue('file', null)
        }
    }

    return (
        <FormProvider methods={methods}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <AvatarCard t={t}
                        onDrop={handleDrop}
                        isHandling={isAvatarUpdating}
                        onSubmit={handleSubmit(updateAvatar)}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <GeneralCard t={t}
                        isHandling={isProfileUpdating}
                        onSubmit={handleSubmit(updateProfile)}
                    />
                </Grid>
            </Grid>
        </FormProvider>
    )
}

export default GeneralContainer;
