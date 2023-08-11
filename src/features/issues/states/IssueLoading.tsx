import React from "react";
import { Stack, Skeleton } from '@mui/material'

type IssueLoadingProps = {
    count?: number
}

export const IssueLoading: React.FC<IssueLoadingProps> = ({ count = 0 }) => {
    const rowCount = count > 0 ? count : 2
    return (
        <Stack spacing={3}>
            {[...Array(1)].map((_,index)=>(
                <Skeleton
                    variant="rectangular"
                    key={index}
                    sx={{
                        height: 100,
                        width: 1,
                        borderRadius: 3
                    }}
                />
            ))}
        </Stack>
    )
}
