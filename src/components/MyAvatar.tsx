import React from 'react'
import { Avatar } from '@mui/material'
import { AuthState, RestProps } from '../utils/types'
import { useSelector } from '../app/store'
import { selectCurrUser } from '../app/redux/auth/authSlice'

type MyAvatarProps = RestProps

const MyAvatar: React.FC<MyAvatarProps> = ({ ...props }) => {
    const user = useSelector((state: AuthState) => selectCurrUser(state))

    if (!user?.avatar) return <Avatar>
        {user?.username?.slice(0, 1)}
    </Avatar>

    return <Avatar
        src={user.avatar}
        alt='smile'
        sx={{ width: 32, height: 32 }}
        {...props}
    />
}

export default MyAvatar;
