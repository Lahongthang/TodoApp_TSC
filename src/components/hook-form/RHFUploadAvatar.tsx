import React from "react";
import { FormHelperText } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { RestProps } from "../../utils/types";
import UploadAvatar from "../upload/UploadAvatar";

type Props = {
    name: string,
}

type RHFUploadProps = Props & RestProps

const RHFUploadAvatar: React.FC<RHFUploadProps> = ({ name, ...props }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={(({ field, fieldState: { error } }) => {
                const isError = !!error && !field.value
                return (
                    <div>
                        <UploadAvatar
                            accept={{
                                'image/jpeg': [],
                                'image/png': [],
                            }}
                            error={isError}
                            file={field.value}
                            {...props}
                        />
                        {isError && (
                            <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </div>
                )
            })}
        />
    )
}

export default RHFUploadAvatar;
