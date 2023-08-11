import React, { ReactNode } from "react";
import { Controller, useFormContext } from 'react-hook-form'
import { RestProps } from "../../utils/types";
import { TextField } from "@mui/material";

type Props = {
    name: string,
    children: ReactNode,
}

type RHFSelectProps = Props & RestProps

const RHFSelect: React.FC<RHFSelectProps> = ({ name, children, ...props }) => {
    const { control } = useFormContext()
    return(
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    select
                    fullWidth
                    size="small"
                    error={!!error}
                    helperText={error?.message}
                    {...props}
                >
                    {children}
                </TextField>
            )}
        />
    )
}

export default RHFSelect;
