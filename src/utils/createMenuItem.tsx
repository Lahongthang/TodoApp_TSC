import { Divider, MenuItem } from "@mui/material"
import Iconify from "../components/Iconify"

export const createMenuItems = (menuConfig: any, handleItemClick: (item: any) => void) => {
    return menuConfig.map((item: any) => {
        if (item.name === 'divider') return <Divider key={item.name} sx={{ borderStyle: 'dashed' }} />
        return (
            <MenuItem
                key={item.name}
                sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    ...item?.sx
                }}
                onClick={() => handleItemClick(item)}
            >
                <Iconify sx={{ mr: 1 }} icon={item.icon} />
                {item.label}
            </MenuItem>
        )
    })
}
