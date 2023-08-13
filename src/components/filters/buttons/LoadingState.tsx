import React from "react";
import { Skeleton, Stack } from "@mui/material";

export const LoadingState: React.FC = () => {
    return (
        <Stack>
            {[...Array(5)].map((_, index) => (
                <Skeleton key={index} sx={{ height: 32, borderRadius: 1.5 }} />
            ))}
        </Stack>
    )
}
