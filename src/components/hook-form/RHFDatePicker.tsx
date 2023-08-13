import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Controller, useFormContext } from 'react-hook-form'
import { RestProps } from "../../utils/types";
import { TextField } from "@mui/material";
import { useLocales } from "../../hooks";

type Props = {
    name: string,
    defaultValue?: any,
    size?: 'small' | 'medium'
    styles?: any,
}

type RHFDatePickerProps = Props & RestProps

const RHFDatePicker: React.FC<RHFDatePickerProps> = ({ name, size = 'small', defaultValue = null, styles, ...props }) => {
    const { control } = useFormContext()
    const { currentLang } = useLocales()
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                if (value && value < props?.minDate) {
                    onChange(defaultValue)
                }
                return <DatePicker
                    {...props}
                    value={value}
                    onChange={onChange}
                    inputFormat={currentLang.value === 'ja' ? 'yyyy/MM/dd' : 'dd/MM/yyyy'}
                    // "@mui/x-date-pickers": "^5.0.20"
                    renderInput={(params: any) => (
                        <TextField
                            {...params}
                            size={size}
                            fullWidth
                            error={!!error}
                            helperText={error?.message}
                            {...styles}
                        />
                    )}
                />
            }}
        />
    )
}

export default RHFDatePicker;
