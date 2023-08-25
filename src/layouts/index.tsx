import React from 'react'
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './header';
import { HEADER } from '../configs/app';

const ApplicationLayout: React.FC = () => {
    return <Box sx={{ width: 1, height: 1 }}>
        <Header />
        <Box component='main'
            sx={{
                width: 1,
                height: 1,
                pt: `${HEADER.DESKTOP_HEIGHT}px`
            }}
        >
            <Outlet />
        </Box>
    </Box>
}

export default ApplicationLayout;
