import React from "react";
import { Chip, Typography } from '@mui/material'
import Iconify from "../../../components/Iconify";
import useFilterParams from "../../../components/filters/useFilterParams";

const ResetButton: React.FC = () => {
    const { reset } = useFilterParams()

    return (
        <Chip
            label={<Typography variant="subtitle2">
                {'Reset'}
            </Typography>}
            onClick={reset}
            sx={{ borderRadius: 3 }}
            color="warning"
            icon={<Iconify icon="bx:reset" sx={{ width: 20, height: 20 }} />}
        />
    )
}

export default ResetButton;
