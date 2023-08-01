import { TextField } from "@mui/material"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { RestProps } from "../../utils/types"

type Props = {
    name: string,
}

type RHFTextFieldProps = Props & RestProps

const RHFTextField: React.FC<RHFTextFieldProps> = ({ name, ...props }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={!!error}
                    helperText={error?.message}
                    value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
                    {...props}
                />
            )}
        />
    )
}

export default RHFTextField;
