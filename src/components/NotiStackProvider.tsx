import React, { ReactNode, useRef } from "react";
import { SnackbarProvider } from 'notistack'
import { Box, alpha, Theme, IconButton, GlobalStyles, useTheme } from '@mui/material'
import { SNACKBAR } from "../configs/app";
import Iconify from "./Iconify";

function SnackbarStyles() {
    const theme = useTheme();
  
    return (
        <GlobalStyles
            styles={{
                '& .notistack-MuiContent': {
                    width: '100%',
                    padding: theme.spacing(0, 1),
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    margin: theme.spacing(0.25, 0),
                    boxShadow: theme.shadows[10],
                    borderRadius: theme.shape.borderRadius,
                    color: theme.palette.common.white,
                }
            }}
        />
    )
}

type NotiStackProviderProps = {
    children: ReactNode
}

const NotiStackProvider: React.FC<NotiStackProviderProps> = ({ children }) => {
    const notistackRef = useRef<any>(null)

    const onClose = (key: any) => () => {
        notistackRef.current.closeSnackbar(key);
    }

    return (
        <>
            <SnackbarStyles />
            <SnackbarProvider
                ref={notistackRef}
                dense
                maxSnack={5}
                preventDuplicate
                autoHideDuration={SNACKBAR.HIDE_DURATION}
                variant="success"
                anchorOrigin={{
                    vertical: SNACKBAR.ANCHOR_VERTICAL,
                    horizontal: SNACKBAR.ANCHOR_HORIZONTAL,
                }}
                iconVariant={{
                    info: <SnackbarIcon icon={'eva:info-fill'} color="info" />,
                    success: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} color="success" />,
                    warning: <SnackbarIcon icon={'eva:alert-triangle-fill'} color="warning" />,
                    error: <SnackbarIcon icon={'eva:alert-circle-fill'} color="error" />,
                }}
                action={(key) => (
                    <IconButton size="small" onClick={onClose(key)} sx={{ p: 0.5 }}>
                        <Iconify icon={'eva:close-fill'} />
                    </IconButton>
                )}
            >
                {children}
            </SnackbarProvider>
        </>
    )
}

export default NotiStackProvider;

type SnackbarIconProps = {
    icon: string,
    color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'
}

const SnackbarIcon: React.FC<SnackbarIconProps> = ({ icon, color }) => {
    return (
        <Box component='span'
            sx={{
                mr: 1.5,
                width: 40,
                height: 40,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                justifyContent: 'center',
                color: `${color}.main`,
                bgcolor: (theme: Theme) => alpha(theme.palette[color].main, 0.16),
            }}
        >
            <Iconify icon={icon} width={24} height={24} />
        </Box>
    )
}
