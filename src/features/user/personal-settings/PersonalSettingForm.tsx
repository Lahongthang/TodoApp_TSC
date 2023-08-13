import { Trans } from 'react-i18next'
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { RHFTextField } from "../../../components/hook-form";

type Props = {
    t: any,
    isHandling?: boolean,
}

const PersonalSettingForm: React.FC<Props> = ({ t, isHandling = false }) => {
    const navigate = useNavigate()

    return (
        <Stack spacing={3}>
            <Typography variant='subtitle1'>
                General info
            </Typography>
            <RHFTextField
                name="username"
                label={t('general.form.username')}
            />
            <RHFTextField
                name="email"
                label={t('general.form.email')}
            />
            <LoadingButton
                size='small'
                type="submit"
                variant="contained"
                loading={isHandling}
                loadingIndicator={t('general.form.updateBtn.loadingIndicator')}>
                {t('general.form.updateBtn.content')}
            </LoadingButton>
        </Stack>
    )
}

export default PersonalSettingForm;
