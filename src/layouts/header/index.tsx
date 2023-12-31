import React from 'react'
import { AppBar, Toolbar, Stack, Box, styled } from '@mui/material'
import { HEADER } from '../../configs/app'
import AccountPopover from './AccountPopover'

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    height: HEADER.DESKTOP_HEIGHT,
    zIndex: theme.zIndex.appBar,
    transition: theme.transitions.create(['width', 'height'], {
        duration: theme.transitions.duration.shorter,
    }),
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
}))

const Header: React.FC = () => {
    return <RootStyle>
        <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction='row' alignItems='center' spacing={1}>
                <AccountPopover />
            </Stack>
        </Toolbar>
    </RootStyle>
}

export default Header;