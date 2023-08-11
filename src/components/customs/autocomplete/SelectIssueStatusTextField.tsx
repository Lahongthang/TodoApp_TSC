import React from "react";
import { ListItemButton, ListItemText } from '@mui/material'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
import { useFormContext } from 'react-hook-form'
import { RestProps } from "../../../utils/types";
import { RHFAutoComplete } from "../../hook-form";

type Props = {
    name: string,
    label: string,
    options: any,
}

type SelectIssueStatusTextFieldProps = Props & RestProps

const SelectIssueStatusTextField: React.FC<SelectIssueStatusTextFieldProps> = ({ name, label, options, ...props }) => {
    const { watch } = useFormContext()
    const selectedStatus = watch(name)
    return (
        <RHFAutoComplete
            name={name}
            label={label}
            options={options}
            renderOption={(props: React.HTMLAttributes<HTMLElement>, status: any) => {
                return <ListItemButton dense key={status.id} {...props}>
                    <FiberManualRecordIcon sx={{
                        mr: 1,
                        width: 18,
                        height: 18,
                        color: status.color,
                    }} />
                    <ListItemText>
                        {status.label}
                    </ListItemText>
                </ListItemButton>
            }}
            startIcon={selectedStatus?.id && (
                <FiberManualRecordIcon sx={{
                    width: 18,
                    height: 18,
                    color: selectedStatus.color,
                }} />
            )}
            {...props}
        />
    )
}

export default SelectIssueStatusTextField;
