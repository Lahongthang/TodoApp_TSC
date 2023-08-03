import React from "react";
import { Paper, Box, Typography, alpha } from '@mui/material'
import { fileData } from "../../../utils/files";
import { fData } from "../../../utils/formatNumber";

type Props = {
    fileRejections: any
}

const RejectionFiles: React.FC<Props> = ({ fileRejections }) => {
    if (!fileRejections.length) {
        return null;
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                py: 1,
                px: 2,
                mt: 3,
                bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
                borderColor: (theme) => alpha(theme.palette.error.main, 0.24),
            }}
        >
            {fileRejections.map(({ file, errors }: { file: any, errors: any }) => {
                const { path, size } = fileData(file);

                return (
                <Box key={path} sx={{ my: 1 }}>
                    <Typography variant="subtitle2" noWrap>
                    {path} - {size ? fData(size) : ''}
                    </Typography>

                    {errors.map((error: any) => (
                        <Box key={error.code} component="span" sx={{ typography: 'caption' }}>
                            - {error.message}
                        </Box>
                    ))}
                </Box>
                )
            })}
        </Paper>
    )
}

export default RejectionFiles;
