import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { RHFTextField } from "../../hook-form";
import { RestProps } from "../../../utils/types";
import { useToggle } from "../../../hooks";

type Props = {
    name: string,
}

type RHFPasswordTextFieldProps = Props & RestProps

const RHFPasswordTextField: React.FC<RHFPasswordTextFieldProps> = ({ name, ...props }) => {
    const { toggle, onToggle } = useToggle()
    return (
        <RHFTextField
            name={name}
            type={toggle ? 'text' : 'password'}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton size='small' onClick={onToggle}>
                        {toggle ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                </InputAdornment>
            }}
            {...props}
        />
    )
}

export default RHFPasswordTextField;
