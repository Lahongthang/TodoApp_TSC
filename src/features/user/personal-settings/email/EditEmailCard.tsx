import { useTranslation } from "react-i18next";
import React from "react";
import { Card, CardHeader, Stack } from "@mui/material";
import { RHFTextField } from "../../../../components/hook-form";
import { LoadingButton } from "@mui/lab";

type EditEmailCardProps = {
    isHandling: boolean,
    onSubmit: () => void,
}

const EditEmailCard: React.FC<EditEmailCardProps> = ({ isHandling , onSubmit }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })

    return (
        <Card>
            <CardHeader title={t('email.title')} />
            <Stack spacing={2}>
                <RHFTextField
                    name='oldEmail'
                    label={t('email.form.oldEmail')}
                    InputProps={{
                        readOnly: true
                    }}
                />
                <RHFTextField name='newEmail' label={t('email.form.newEmail')} />
                <Stack direction='row' justifyContent='flex-end'>
                    <LoadingButton
                        size="small"
                        type='submit'
                        onClick={onSubmit}
                        variant="contained"
                        loading={isHandling}
                        loadingIndicator={t('email.form.updateBtn.loadingIndicator')}>
                        {t('email.form.updateBtn.content')}
                    </LoadingButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default EditEmailCard;
