import React from "react";
import { Box } from '@mui/material'

type SvgIconStyleProps = {
    src?: string,
    sx?: any,
}

const SvgIconStyle: React.FC<SvgIconStyleProps> = ({ src, sx }) => {
    return (
        <Box
            component={'span'}
            sx={{
                width: 24,
                height: 24,
                display: 'inline-block',
                bgcolor: 'currentcolor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
                ...sx,
            }}
        />
    )
}

export default SvgIconStyle;
