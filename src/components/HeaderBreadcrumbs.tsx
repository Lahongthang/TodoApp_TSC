import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Breadcrumbs from './Breadcrumbs';
import { isEmpty } from 'lodash';
import { RestProps } from '../utils/types';

type Props = {
    links?: any,
    action?: any,
    heading: string,
    moreLink?: any,
    sx?: any,
}

type HeaderBreadcrumbsProps = Props & RestProps

const HeaderBreadcrumbs: React.FC<HeaderBreadcrumbsProps> = ({ links, action, heading, moreLink = '' || [], sx, ...props }) => {
    return (
        <Box sx={{ mt: 2, mb: 2, ...sx }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom>
                {heading}
            </Typography>
                {links && <Breadcrumbs links={links} {...props} />}
            </Box>

            {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
        </Box>

        {!isEmpty(moreLink) && <Box sx={{ mt: 2 }}>
            {typeof moreLink === 'string' ? (
                <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
                    {moreLink}
                </Link>
                ) : (
                    moreLink.map((href: string) => (
                        <Link
                            noWrap
                            key={href}
                            href={href}
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            sx={{ display: 'table' }}
                        >
                            {href}
                        </Link>
                    ))
                )}
            </Box>}
        </Box>
    );
}

export default HeaderBreadcrumbs;
