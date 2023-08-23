import { Trans } from "react-i18next";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { RHFTextField } from "../../../../components/hook-form";
import useStepValues from "../../../../components/steps/useStepValues";

type VerifyEmailFormProps = {
    t: any,
}

const VerifyEmailForm: React.FC<VerifyEmailFormProps> = ({ t }) => {
    const { getStepValues } = useStepValues()
    const { email } = getStepValues(0)
    
    return (
        <Stack spacing={2}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <Trans
                    defaults={t('desc', { email })}
                    components={{ custom: <span style={{ fontWeight: 'bold', color: '#000000DE' }} /> }}
                />
            </Typography>
            <RHFTextField name='verifyCode' label={t('form.verifyCode')} />
        </Stack>
    )
}

export default VerifyEmailForm;
