import React from "react";
import { Chip, Typography } from '@mui/material'
import Iconify from "../../Iconify";
import { RestProps } from "../../../utils/types";

type Props = {
    open: boolean,
    label: any,
    sx?: any,
    onOpen: (e: any) => void,
}

type FilterButtonProps = Props & RestProps

const FilterButton: React.FC<FilterButtonProps> = ({ open, label, sx, onOpen, ...props }) => {
    return (
        <Chip
            onClick={onOpen}
            label={<Typography variant="body2">{label}</Typography>}
            icon={<Iconify
                sx={{ width: 20, height: 20 }}
                icon={open ? 'iconamoon:arrow-up-2-duotone' : 'iconamoon:arrow-down-2-duotone'}
            />}
            sx={{
                borderRadius: 3,
                '& .MuiChip-label': { pl: 1 },
                ...sx
            }}
            {...props}
        />
    )
}

export default FilterButton;
