import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { RestProps } from '../utils/types';

type Props = {
    links?: any,
}

type BreadcrumbsProps = Props & RestProps

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, activeLast = false, ...props }) => {
    const currentLink = links[links.length - 1].name;

    const listDefault = links.map((link: any) => <LinkItem key={link.name} link={link} />);

    const listActiveLast = links.map((link: any) => (
        <div key={link.name}>
        {link.name !== currentLink ? (
            <LinkItem link={link} />
        ) : (
            <Typography
                variant="body2"
                sx={{
                    maxWidth: 260,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    color: 'text.disabled',
                    textOverflow: 'ellipsis',
                }}
            >
                {currentLink}
            </Typography>
        )}
        </div>
    ));

    return (
        <MUIBreadcrumbs
            separator={<Box component="span" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />}
            {...props}
        >
            {activeLast ? listDefault : listActiveLast}
        </MUIBreadcrumbs>
    );
}

type LinkItemProps = {
    link: any,
}

const  LinkItem: React.FC<LinkItemProps> = ({ link }) => {
    const { href, name, icon } = link;
    return (
        <Link
            key={name}
            variant="body2"
            component={RouterLink}
            to={href || '#'}
            sx={{
                lineHeight: 2,
                display: 'flex',
                alignItems: 'center',
                color: 'text.primary',
                '& > div': { display: 'inherit' },
            }}
        >
            {icon && <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>}
            {name}
        </Link>
    );
}

export default Breadcrumbs;
