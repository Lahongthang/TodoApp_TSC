import React from "react";
import { IconButton, Stack, Tooltip } from '@mui/material'
import Iconify from "./Iconify";

const withAction = (Component: React.ComponentType<any>, configs?: any) => {
    const { icon, actionTitle } = configs
    return (props: any) => {
        const { onActionSubmit, sx, ...other } = props
        return (
            <Stack spacing={1} direction='row' alignItems='center' sx={{...sx}}>
                <Component {...other} />
                <Tooltip placement="top" title={actionTitle}>
                    <IconButton onClick={onActionSubmit}>
                        <Iconify icon={icon} sx={{ color: 'primary.main' }} />
                    </IconButton>
                </Tooltip>
            </Stack>
        )
    }
}

export default withAction;
