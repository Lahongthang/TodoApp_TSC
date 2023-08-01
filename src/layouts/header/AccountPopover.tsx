import React, { useState } from 'react'
import { IconButton, Popover, Box, Typography, Divider, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MyAvatar from '../../components/MyAvatar';
import { dispatch, useSelector } from '../../app/store';
import { AuthState } from '../../utils/types';
import { selectCurrUser, signOut } from '../../app/redux/auth/authSlice';

const AccountPopover: React.FC = () => {
    const [open, setOpen] = useState<any>(null)

    const user = useSelector((state: AuthState) => selectCurrUser(state))

    const handleLogOut = () => {
        dispatch(signOut({}))
    }

    return <>
        <IconButton onClick={(e) => setOpen(e.currentTarget)}>
            <MyAvatar />
        </IconButton>
        <Popover
            open={Boolean(open)}
            onClose={() => setOpen(null)}
            anchorEl={open}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                '& .MuiPaper-root': { borderRadius: 2 }
            }}
        >
            <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant='subtitle2'>
                    {user?.username}
                </Typography>
                <Typography variant='body2'>
                    {user?.email}
                </Typography>
            </Box>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem sx={{ color: 'error.main' }} onClick={handleLogOut}>
                <LogoutIcon sx={{ width: 20, height: 20, pr: 1 }} />
                Logout
            </MenuItem>
        </Popover>
    </>
}

export default AccountPopover;
