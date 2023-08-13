import React from "react";
import { Stack, Skeleton, Divider } from '@mui/material'

export const IssueDetailSkeleton: React.FC = () => {
    return (
        <Stack spacing={2}>
            <Skeleton variant="rectangular" sx={{ height: 63, borderRadius: 1.5 }} />
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack direction='row' spacing={2}>
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
                <Skeleton variant="rectangular" sx={{ height: 40, width: 1, borderRadius: 1.5 }} />
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Skeleton variant="rectangular" sx={{ height: 86 }} />
        </Stack>
    )
}
