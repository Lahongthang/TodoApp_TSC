import React from "react";
import { Stack, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { RHFDatePicker } from "../../hook-form";

type CustomTimeFormProps = {
    t: any,
}

const CustomTimeForm: React.FC<CustomTimeFormProps> = ({ t }) => {
    const { watch } = useFormContext()
    return (
        <Stack spacing={1} sx={{ pt: 1, px: 1 }}>
            <Stack direction='row' alignItems='center'>
                <Typography variant="body2" sx={{ width: 60 }}>
                    {t('filterTime.custom.from')}
                </Typography>
                <RHFDatePicker name="fromDate" />
            </Stack>
            <Stack direction='row' alignItems='center'>
                <Typography variant="body2" sx={{ width: 60 }}>
                    {t('filterTime.custom.to')}
                </Typography>
                <RHFDatePicker name="toDate" minDate={watch('fromDate')} />
            </Stack>
        </Stack>
    )
}

export default CustomTimeForm;
