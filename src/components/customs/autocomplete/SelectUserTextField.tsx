import React from "react";
import { ListItemButton, Avatar, ListItemText } from '@mui/material'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { useFormContext } from 'react-hook-form'
import { RestProps } from "../../../utils/types";
import { RHFAutoComplete } from "../../hook-form";

type Props = {
    name: string,
    label: string,
    options: any,
}

type SelectUserTextFieldProps = Props & RestProps

const SelectUserTextField: React.FC<SelectUserTextFieldProps> = ({ name, label, options, ...props }) => {
    const { watch } = useFormContext()
    const selectedUser = watch(name)
    return (
        <RHFAutoComplete
            name={name}
            label={label}
            options={options}
            renderOption={(props: React.HTMLAttributes<HTMLElement>, user: any) => {
                return <ListItemButton key={user.id} dense {...props}>
                    <Avatar
                        src={user.avatar}
                        alt={user.username}
                        sx={{ width: 24, height: 24, mr: 1 }}
                    />
                    <ListItemText>
                        {user.label}
                    </ListItemText>
                </ListItemButton>
            }}
            startIcon={selectedUser?.id && (
                <Avatar
                    src={selectedUser.avatar}
                    alt={selectedUser.label}
                    sx={{ width: 24, height: 24 }}
                />
            )}
            {...props}
        />
    )
}

export default SelectUserTextField;
