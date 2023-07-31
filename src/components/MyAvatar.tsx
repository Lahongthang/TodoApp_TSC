import React from 'react'
import { Avatar } from '@mui/material'
import { RestProps } from '../utils/types'

type MyAvatarProps = RestProps

const MyAvatar: React.FC<MyAvatarProps> = ({ ...props }) => {
    return <Avatar
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/640px-Mr._Smiley_Face.svg.png'
        alt='smile'
        sx={{ width: 32, height: 32 }}
        {...props}
    />
}

export default MyAvatar;
