import React from "react";
import { Box } from '@mui/material'
import { Icon } from '@iconify/react'
import { RestProps } from "../utils/types";

type Props = {
    icon: string,
}

type IconifyProps = Props & RestProps

const Iconify: React.FC<IconifyProps> = ({ icon, ...props }) => {
    return (
        <Box component={Icon} icon={icon} {...props} />
    )
}

export default Iconify;
