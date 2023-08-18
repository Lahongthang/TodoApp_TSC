import React, { useMemo, useState } from 'react'
import { IconButton, Box, Typography } from '@mui/material';
import { useSnackbar } from 'notistack'
import MyAvatar from '../../components/MyAvatar';
import { dispatch, useSelector } from '../../app/store';
import { AuthState } from '../../utils/types';
import { selectCurrUser } from '../../app/redux/auth/authSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import MenuPopover from '../../components/MenuPopover';
import { authApi } from '../../app/services/auth/authApi';
import { createMenuItems } from '../../utils/createMenuItem';
import { translateArray } from '../../utils/array/translateArray';

const menuConfig = [
    { name: 'home', label: 'Home', icon: 'ic:round-home', sx: { color: 'primary.main' } },
    { name: 'settings', label: 'Settings', icon: 'mingcute:user-setting-fill', sx: { color: 'primary.main' } },
    { name: 'divider' },
    { name: 'logout', label: 'Logout', icon: 'humbleicons:logout', sx: { color: 'error.main' } },
]

const AccountPopover: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'account' })
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()

    const [open, setOpen] = useState<any>(null)

    const user = useSelector((state: AuthState) => selectCurrUser(state))

    const transMenu = useMemo(() => {
        return translateArray(menuConfig, (item) => ({...item, label: t(`menuItems.${item.name}`)}))
    }, [t])

    const handleItemClick = (item: any) => {
        setOpen(null)
        switch (item.name) {
            case 'home':
                navigate('/')
                break
            case 'settings':
                navigate('/personal-settings')
                break
            case 'logout':
                handleLogOut()
                break
            default:
        }
    }

    const handleLogOut = async () => {
        try {
            await dispatch(authApi.endpoints.logout.initiate({})).unwrap()
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
        <MenuPopover
            open={open}
            onClose={() => setOpen(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{
                '& .MuiPaper-root': {
                    width: 250,
                },
            }}
        >
            <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant='subtitle2'>
                    {user?.username}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {user?.email}
                </Typography>
            </Box>
            {createMenuItems(transMenu, handleItemClick)}
        </MenuPopover>
    </>
}

export default AccountPopover;
