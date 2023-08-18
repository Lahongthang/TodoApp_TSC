import React from "react";
import { Card, CardHeader, Stack, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { useFormContext } from 'react-hook-form'
import { RHFTextField } from "../../../../components/hook-form";
import { RHFPhoneTextField } from "../../../../components/customs/text-field";

type Props = {
    t: any,
    isHandling?: boolean,
    onSubmit: () => void,
}

const GeneralCard: React.FC<Props> = ({ t, onSubmit, isHandling = false }) => {
    const { reset } = useFormContext()

    return (
        <Card>
            <CardHeader title={t('general.title')} />
            <Stack spacing={2}>
                <Stack spacing={2} direction='row'>
                    <RHFTextField
                        name="username"
                        label={t('general.form.username')}
                    />
                    <RHFPhoneTextField
                        name="phone"
                        label={t('general.form.phone')}
                    />
                </Stack>
                <RHFTextField
                    name="address"
                    label={t('general.form.address')}
                />
                <RHFTextField
                    name="about"
                    multiline
                    rows={3}
                    label={t('general.form.about')}
                />
                <Stack direction='row' spacing={2} justifyContent='flex-end'>
                    <Button
                        size="small"
                        variant="contained"
                        color="warning"
                        onClick={() => reset()}
                    >
                        {t('general.form.resetBtn')}
                    </Button>
                    <LoadingButton
                        size='small'
                        onClick={onSubmit}
                        variant="contained"
                        loading={isHandling}
                        loadingIndicator={t('general.form.updateBtn.loadingIndicator')}>
                        {t('general.form.updateBtn.content')}
                    </LoadingButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default GeneralCard;
