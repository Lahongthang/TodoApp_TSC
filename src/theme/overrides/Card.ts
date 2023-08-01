import { Theme } from '@mui/material'

export default function Card(theme: Theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: theme.spacing(2),
                    padding: theme.spacing(2),
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2', marginTop: theme.spacing(0.5) },
            },
        },
    }
}
