import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { RHFTextField } from "../../../../components/hook-form";
import Iconify from "../../../../components/Iconify";

type FindAccountFormProps = {
    t: any,
}

const FindAccountForm: React.FC<FindAccountFormProps> = ({ t }) => {
    return (
        <Stack spacing={2.5}>
            <Typography variant="body2">
                {t('desc')}
            </Typography>
            <RHFTextField name='email' label={t('form.email')} />
            <Stack direction='row'>
                <Button
                    size="small"
                    href="login"
                    startIcon={<Iconify icon="basil:login-solid" />}>
                    {t('form.signIn')}
                </Button>
            </Stack>
        </Stack>
    )
}

export default FindAccountForm;
