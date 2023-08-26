import { AppBar, Toolbar, styled, alpha } from "@mui/material";
import React from "react";
import { HEADER, NAVBAR } from "../../configs/app";
import NavSection from "../../components/nav-section";
import { NAV_CONFIGS } from "../../configs/navConfigs";

const RootStyle = styled(AppBar)(({ theme }) => ({
    width: '100%',
    height: NAVBAR.HEIGHT,
    position: 'fixed',
    top: HEADER.DESKTOP_HEIGHT,
    zIndex: theme.zIndex.appBar,
    boxShadow: `0 12px 24px 0 ${alpha('#919EAB', 0.16)}`,
    backgroundColor: theme.palette.background.default,
    borderTop: `1px dashed ${theme.palette.divider}`,
    transition: theme.transitions.create('top', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
}));

const Navbar: React.FC = () => {
    return (
        <RootStyle as='nav'>
            <Toolbar sx={{ minHeight: `${NAVBAR.HEIGHT}px !important` }}>
                <NavSection navConfigs={NAV_CONFIGS} />
            </Toolbar>
        </RootStyle>
    )
}

export default Navbar;
