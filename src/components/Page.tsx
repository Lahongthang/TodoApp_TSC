import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { RestProps } from '../utils/types'

type Props = {
    title?: string,
    children: ReactNode,
}

type PageProps = Props & RestProps

const Page: React.FC<PageProps> = ({ title, children, ...props }) => {
    return <>
        <title>{title}</title>
        <Box {...props}>
            {children}
        </Box>
    </>
}

export default Page;
