import React from "react";
import { styled, Typography } from '@mui/material'
import { RestProps } from "../utils/types";
import Image from "./Image";

const RootStyle = styled('div')(({ theme }) => ({
    height: '100%',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}))

type Props = {
    title?: string,
    description?: string,
    img?: string,
    imgProps?: any,
    titleStyles?: any,
    descStyles?: any,
}

type EmptyContentProps = Props & RestProps

const EmptyContent: React.FC<EmptyContentProps> = ({ title, description, img, imgProps, titleStyles, descStyles, ...props }) => {
    return (
        <RootStyle {...props}>
            <Image
                disabledEffect
                altt='empty content'
                src={img ?? '/assets/illustrations/empty_flower.svg'}
                sx={{
                    height: 100,
                    ...imgProps,
                }}
            />
            {title && <Typography gutterBottom variant="subtitle2" sx={{...titleStyles}}>
                {title}
            </Typography>}
            {description && <Typography variant="body2" sx={{ color: 'text.secondary', ...descStyles }}>
                {description}
            </Typography>}
        </RootStyle>
    )
}

export default EmptyContent;
