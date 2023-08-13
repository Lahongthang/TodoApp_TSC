import React, { ReactNode } from "react";
import { Popover } from '@mui/material'
import { RestProps } from "../utils/types";

type Props = {
    children: ReactNode,
    open: any,
    onClose: () => void,
}

type MenuPopoverProps = Props & RestProps

const MenuPopover: React.FC<MenuPopoverProps> = ({ children, open, onClose, ...props }) => {
    return (
        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            {...props}
        >
            {children}
        </Popover>
    )
}

export default MenuPopover;
