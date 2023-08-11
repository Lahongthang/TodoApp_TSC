import { useTranslation } from "react-i18next";
import React, { useCallback, useState } from "react";
import { Grid, Card, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "../../../components/hook-form";
import RHFUploadAvatar from "../../../components/hook-form/RHFUploadAvatar";
import { fData } from "../../../utils/formatNumber";
import PersonalSettingForm from "./PersonalSettingForm";
import { useAuth } from "../../../hooks";
import { dispatch } from "../../../app/store";
import { userApi } from "../../../app/services/user/userApi";
import { PersonalSettingSchema } from "../../../utils/validations/personal-settings/PersonalSettingSchema";

const PersonalSettingContainer: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })
    const { auth } = useAuth()

    const [isAvatarUpdating, setIsAvatarUpdating] = useState<boolean>(false)
    const [isProfileUpdating, setIsProfileUpdating] = useState<boolean>(false)

    const defaultValues = {
        file: null,
        avatar: auth.user?.avatar ?? '',
        username: auth.user?.username ?? '',
        email: auth.user?.email ?? '',
    }
    const methods = useForm({
        resolver: yupResolver(PersonalSettingSchema(t)),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit, setValue, reset, resetField } = methods

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
        const { username, email } = data
        const bodyData = { username, email }
        try {
            await dispatch(userApi.endpoints.updateProfile.initiate({ id: auth.user?.id, data: bodyData })).unwrap()
        } catch (error) {
            resetField('username')
            resetField('email')
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
            await dispatch(userApi.endpoints.updateAvatar.initiate({ id: auth.user?.id, data: formData })).unwrap()
        } catch (error) {
            console.error(error)
        } finally {
            setIsAvatarUpdating(false)
        }
    }

    const handleFormSubmit = (data: any) => {
        updateAvatar(data)
        updateProfile(data)
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <RHFUploadAvatar
                            name="avatar"
                            maxSize={3145728}
                            onDrop={handleDrop}
                            helperText={
                                <Typography variant="caption"
                                    sx={{
                                        mt: 2, mx: 'auto',
                                        display: 'block',
                                        textAlign: 'center',
                                        color: 'text.secondary',
                                    }}>
                                    {t('general.form.allowed')}
                                    <br/>
                                    {t('general.form.maxSize')} {fData(3145728)}
                                </Typography>
                            }
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Card>
                        <PersonalSettingForm t={t}
                            isHandling={isAvatarUpdating || isProfileUpdating} />
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    )
}

export default PersonalSettingContainer;
