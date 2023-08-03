import React, { useState } from 'react'
import { IconButton, Popover, Box, Typography, Divider, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSnackbar } from 'notistack'
import MyAvatar from '../../components/MyAvatar';
import { dispatch, useSelector } from '../../app/store';
import { AuthState } from '../../utils/types';
import { selectCurrUser, signOut } from '../../app/redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Iconify from '../../components/Iconify';

const AccountPopover: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'login' })
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()

    const [open, setOpen] = useState<any>(null)

    const user = useSelector((state: AuthState) => selectCurrUser(state))

    const handleLogOut = () => {
        try {
            dispatch(signOut({}))
            navigate('/login')
            enqueueSnackbar(t('notifications.logoutSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.logoutFailed'), { variant: 'error' })
            console.error(error)
        }
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
            <MenuItem
                sx={{ color: 'primary.main' }}
                onClick={() => {
                    setOpen(null)
                    navigate('/personal-settings')
                }}
            >
                <Iconify icon='mingcute:user-setting-fill' sx={{ mr: 1 }} />
                Settings
            </MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem sx={{ color: 'error.main' }} onClick={handleLogOut}>
                <Iconify icon='humbleicons:logout' sx={{ mr: 1 }} />
                Logout
            </MenuItem>
        </Popover>
    </>
}

export default AccountPopover;
