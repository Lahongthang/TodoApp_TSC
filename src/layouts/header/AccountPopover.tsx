import React, { useState } from 'react'
import { IconButton, Popover, Box, Typography, Divider, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MyAvatar from '../../components/MyAvatar';

const AccountPopover: React.FC = () => {
    const [open, setOpen] = useState<any>(null)

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
            }}>
            <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant='subtitle2'>
                    Thangla
                </Typography>
                <Typography variant='body2'>
                    lahongthang266@gmail.com
                </Typography>
            </Box>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem sx={{ color: 'error.main' }}>
                <LogoutIcon sx={{ width: 20, height: 20, pr: 1 }} />
                Logout
            </MenuItem>
        </Popover>
    </>
}

export default AccountPopover;
