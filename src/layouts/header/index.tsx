import React from 'react'
import { AppBar, Toolbar, Stack, Box, styled } from '@mui/material'
import { HEADER } from '../../configs/app'
import AccountPopover from './AccountPopover'
import LanguagePopover from './LanguagePopover'
import { useAuth } from '../../hooks'

const RootStyle = styled(AppBar)(({ theme }) => ({
    width: '100%',
    height: HEADER.DESKTOP_HEIGHT,
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.appBar,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create(['width', 'height'], {
        duration: theme.transitions.duration.shorter,
    }),
}))

const Header: React.FC = () => {
    const { auth } = useAuth()
    const { isAuthenticated } = auth ?? {}

    return <RootStyle>
        <Toolbar sx={{ height: 1 }}>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction='row' alignItems='center' spacing={1}>
                <LanguagePopover />
                {isAuthenticated && <AccountPopover />}
            </Stack>
        </Toolbar>
    </RootStyle>
}

export default Header;
