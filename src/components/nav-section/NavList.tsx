import { useRef, useState } from "react"
import { Stack } from '@mui/material'
import { Nav } from "./type"
import NavItem from "./NavItem"
import { PaperStyle } from "./styles"

type NavlistProps = {
    item: Nav,
    depth: number,
}

const Navlist: React.FC<NavlistProps> = ({ item, depth }) => {
    const menuRef = useRef(null)

    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        if (item.children) setOpen(true)
    }

    const handleClose = () => {
        if (item.children) setOpen(false)
    }

    return (
        <>
            <NavItem
                ref={menuRef}
                item={item}
                open={open}
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
            />
            {open && item.children && (
                <PaperStyle
                    open={open}
                    anchorEl={menuRef.current}
                    anchorOrigin={
                        depth === 1 ? { vertical: 'bottom', horizontal: 'left' } : { vertical: 'center', horizontal: 'right' }
                    }
                    transformOrigin={
                        depth === 1 ? { vertical: 'top', horizontal: 'left' } : { vertical: 'center', horizontal: 'left' }
                    }
                    slotProps={{
                        paper: {
                            onMouseEnter: handleOpen,
                            onMouseLeave: handleClose,
                        }
                    }}
                >
                    <NavSubList items={item.children} depth={depth} />
                </PaperStyle>
            )}
        </>
    )
}

export default Navlist;

// --------------------------------------------------------------------------

type NavSubListProps = {
    items: Nav[],
    depth: number,
}

const NavSubList: React.FC<NavSubListProps> = ({ items, depth }) => {
    return (
        <Stack spacing={0.5}>
            {items.map((item: Nav, index) => (
                <Navlist key={index} item={item} depth={depth + 1} />
            ))}
        </Stack>
    )
}