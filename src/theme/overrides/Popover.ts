import { Theme } from '@mui/material'

export default function Popover(theme: Theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    borderRadius: theme.spacing(1.5),
                    padding: theme.spacing(0.5),
                }
            }
        }
    }
}
