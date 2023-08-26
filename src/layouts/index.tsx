import React from 'react'
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import { useAuth } from '../hooks';
import Header from './header';
import { HEADER, NAVBAR } from '../configs/app';
import Navbar from './navbar';

const RootStyle = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}))

const MainStyle = styled('main', {
    shouldForwardProp: (prop: any) => prop !== 'isAuthenticated'
})(({ isAuthenticated }: { isAuthenticated: boolean }) => ({
    width: '100%',
    height: 0,
    flex: 1,
    paddingTop: isAuthenticated ? `calc(${HEADER.DESKTOP_HEIGHT}px + ${NAVBAR.HEIGHT}px)` : `${HEADER.DESKTOP_HEIGHT}px`
}))

const ApplicationLayout: React.FC = () => {
    const { auth } = useAuth()
    const { isAuthenticated } = auth
    return (
        <RootStyle>
            <Header />
            {isAuthenticated && <Navbar />}
            <MainStyle isAuthenticated={isAuthenticated}>
                <Outlet />
            </MainStyle>
        </RootStyle>
    )
}

export default ApplicationLayout;
