import { Card, CardHeader, Stack } from "@mui/material";
import React from "react";
import { LoadingButton } from "@mui/lab";
import { RHFPasswordTextField } from "../../../../components/customs/text-field";

type SecurityCardProps = {
    t: any,
    isHandling: boolean,
}

const SecurityCard: React.FC<SecurityCardProps> = ({ t, isHandling }) => {
    return (
        <Card>
            <CardHeader title={t('security.title')} />
            <Stack spacing={2}>
                <RHFPasswordTextField name='oldPassword' label={t('security.form.oldPassword')} />
                <RHFPasswordTextField name='newPassword' label={t('security.form.newPassword')} />
                <RHFPasswordTextField name='confirmPassword' label={t('security.form.confirmPassword')} />
                <Stack spacing={2} direction='row' justifyContent='flex-end'>
                    <LoadingButton
                        size="small"
                        type='submit'
                        variant='contained'
                        loading={isHandling}
                        loadingIndicator={t('security.form.updateBtn.loadingIndicator')}
                    >
                        {t('security.form.updateBtn.content')}
                    </LoadingButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default SecurityCard;
