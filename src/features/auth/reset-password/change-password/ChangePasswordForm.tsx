import React from "react";
import { Stack, Typography } from '@mui/material'
import { RHFPasswordTextField } from "../../../../components/customs/text-field";

type ChangePasswordFormProps = {
    t: any,
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ t }) => {
    return (
        <Stack spacing={2} sx={{ width: 1 }} justifyContent='center'>
            <Typography variant="body2">
                {t('desc')}
            </Typography>
            <RHFPasswordTextField
                name='newPassword'
                label={t('form.newPassword')}
            />
            <RHFPasswordTextField
                name='confirmPassword'
                label={t('form.confirmPassword')}
            />
        </Stack>
    )
}

export default ChangePasswordForm;
