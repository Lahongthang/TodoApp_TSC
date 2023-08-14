import React, { ReactNode, forwardRef } from 'react'
import { Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { RestProps } from '../utils/types'

type Props = {
    title?: string,
    children: ReactNode,
    meta?: any,
}

type PageProps = Props & RestProps

const Page: React.FC<PageProps> = forwardRef(({ title, meta, children, ...props }, ref) => {
    return <>
        <Helmet>
            <title>{title}</title>
            {meta}
        </Helmet>
        <Box ref={ref} {...props}>
            {children}
        </Box>
    </>
})

export default Page;
