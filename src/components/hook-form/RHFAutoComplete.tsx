import React, { ReactNode } from "react";
import { Autocomplete, AutocompleteRenderInputParams, TextField, Box, ListItemButton } from '@mui/material'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
import { RestProps } from "../../utils/types";
import { isFunction } from "lodash";

type Props = {
    name: string,
    label: string,
    inputProps?: any,
    options: any,
    startIcon?: ReactNode,
    renderInput?: (params: AutocompleteRenderInputParams, error: FieldError | undefined) => ReactNode
    renderOption?: (props: React.HTMLAttributes<HTMLElement>, option: any) => ReactNode
}

type RHFAutoCompleteProps = Props & RestProps

const RHFAutoComplete: React.FC<RHFAutoCompleteProps> = ({ name, label, inputProps, options, startIcon, renderInput, renderOption, ...props }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...fieldProps }, fieldState: { error } }) => {
                return <Autocomplete
                    {...fieldProps}
                    size="small"
                    fullWidth
                    options={options}
                    getOptionLabel={(option: any) => option?.label ?? ''}
                    onChange={(event, newValue, reason) => {
                        onChange(newValue)
                    }}
                    isOptionEqualToValue={(option: any, value: any) => option?.id === value?.id}
                    renderInput={(params) => {
                        const forwardProps = (({InputLabelProps, ...rest}) => rest)(params)
                        return isFunction(renderInput) ? renderInput(params, error) : <TextField
                        {...forwardProps}
                        label={label}
                        error={!!error}
                        helperText={error?.message}
                        InputProps={{
                            ...inputProps,
                            ...params.InputProps,
                            startAdornment: startIcon,
                        }}
                    />}}
                    renderOption={(props, option) => {
                        return isFunction(renderOption) ? renderOption(props, option) : (
                            <ListItemButton key={option.id} component='li' dense {...props}>
                                {option.label}
                            </ListItemButton>
                        )
                    }}
                    {...props}
                />
            }}
        />
    )
}

export default RHFAutoComplete;
