import { Stack } from "@mui/material";
import React from "react";
import { RHFTextField } from "../../../components/hook-form";

const ColorForm: React.FC = () => {
    return (
        <Stack sx={{ pt: 1 }}>
            <RHFTextField name="name" label='Name' size='small' />
        </Stack>
    )
}

export default ColorForm;
