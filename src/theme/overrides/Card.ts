import { Theme, alpha } from '@mui/material'

export default function Card(theme: Theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: theme.spacing(2),
                    padding: theme.spacing(2),
                    boxShadow: `0 0 2px 0 ${alpha('#919EAB', 0.2)}, 0 12px 24px -4px ${alpha('#919EAB', 0.12)}`,
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2' },
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(0),
                    paddingBottom: theme.spacing(2),
                },
            },
        },
    }
}
