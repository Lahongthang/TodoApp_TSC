import { ListItemButton, ListItemIcon, Popover, styled, alpha, Theme } from '@mui/material'

type ListItemStyleProps = {
    open?: boolean,
    active?: boolean,
}

export const ListItemStyle = styled(ListItemButton, {
    shouldForwardProp: (prop: any) => prop !== 'active' && prop !== 'open'
})<ListItemStyleProps>(({ open, active, theme }) => {
    const activeStyle = {
        color: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    };
  
    const hoverStyle = {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
    };
  
    return {
        textTransform: 'capitalize',
        padding: theme.spacing(0, 1),
        flexGrow: 'unset',
        color: theme.palette.text.secondary,
        borderRadius: theme.spacing(1),
        height: 32,
        '&:hover': hoverStyle,
        // Active item
        ...(active && {
            ...activeStyle,
            '&:hover': { ...activeStyle },
        }),
        // Open
        ...(open && !active && hoverStyle),
    };
});

export const ListItemIconStyle = styled(ListItemIcon)(({ theme }) => ({
    marginRight: theme.spacing(1),
    flexShrink: 0,
    width: '20px',
    height: '20px',
    minWidth: '20px',
}))

export const PaperStyle = styled(Popover)(({ theme }) => ({
    pointerEvents: 'none',
    '& .MuiPopover-paper': {
        width: 160,
        pointerEvents: 'auto',
        padding: theme.spacing(1),
        borderRadius: Number(theme.shape.borderRadius) * 2,
    },
}));
