import React from "react";
import { Chip, Typography } from '@mui/material'
import Iconify from "../../Iconify";
import { RestProps } from "../../../utils/types";

type Props = {
    open: boolean,
    label: any,
    onOpen: (e: any) => void,
}

type FilterButtonProps = Props & RestProps

const FilterButton: React.FC<FilterButtonProps> = ({ open, label, onOpen, ...props }) => {
    return (
        <Chip
            onClick={onOpen}
            label={<Typography variant="body2">{label}</Typography>}
            icon={<Iconify
                sx={{ width: 20, height: 20 }}
                icon={open ? 'iconamoon:arrow-up-2-duotone' : 'iconamoon:arrow-down-2-duotone'}
            />}
            {...props}
        />
    )
}

export default FilterButton;
