import React, { useState } from "react"
import { TableCell, Box, IconButton, Popover, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableRowStyle } from "./styles"
import { transformToCapitalize, transformToLowerCase } from "../../../utils/transformText";
import { RestProps } from "../../../utils/types";
import { useAuth, useToggle } from "../../../hooks";
import ConfirmDialog from "../../../components/ConfirmDialog";
import { dispatch } from "../../../app/store";
import { ColorItemType } from "../../../utils/types/color";
import { colorApi } from "../../../app/services/color/colorApi";
import AddUpdateColorDialog from "../dialog/AddUpdateColorDialog";
import MenuPopover from "../../../components/MenuPopover";

type Props = {
    color: ColorItemType
}

type ColorTableRowProps = Props & RestProps

const ColorTableRow: React.FC<ColorTableRowProps> = ({ color, ...props }) => {
    const { auth } = useAuth()
    const { id, name } = color ?? {}

    const [openMenu, setOpenMenu] = useState<any>(null)
    const [editColor, setEditColor] = useState<ColorItemType>()
    const { toggle: openConfirmDial, onOpen: onOpenConfirmDial, onClose: onCloseConfirmDial } = useToggle()

    const handleDeleteColor = async () => {
        try {
            await dispatch(colorApi.endpoints.deleteColor.initiate(id)).unwrap()
            onCloseConfirmDial()
        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdateColor = async (data: any) => {
        const bodyData = {
            name: data.name,
            userId: auth.user?.id,
        }
        try {
            await dispatch(colorApi.endpoints.updateColor.initiate({ id, data: bodyData })).unwrap()
            setEditColor(undefined)
        } catch (error) {
            console.error(error)
        }
    }
    
    return <>
        <TableRowStyle hover {...props}>
            <TableCell>
                {transformToCapitalize(name)}
            </TableCell>
            <TableCell align="center">
                <Box sx={{
                    width: 30,
                    height: 15,
                    borderRadius: 0.5,
                    backgroundColor: transformToLowerCase(name),
                }} />
            </TableCell>
            <TableCell>
                <IconButton
                    size="small"
                    onClick={(e) => setOpenMenu(e.currentTarget)}>
                    <MoreVertIcon sx={{ width: 20, height: 20 }} />
                </IconButton>
            </TableCell>
        </TableRowStyle>
        {openMenu && <MenuPopover
            open={openMenu}
            onClose={() => setOpenMenu(null)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            <MenuItem
                sx={{
                    fontSize: '15px',
                    color: 'primary.main',
                }}
                onClick={() => {
                    setEditColor(color)
                    setOpenMenu(false)
                }}
            >
                <EditIcon sx={{ pr: 1 }} />
                Edit
            </MenuItem>
            <MenuItem
                sx={{
                    fontSize: '15px',
                    color: 'error.main',
                }}
                onClick={() => {
                    onOpenConfirmDial()
                    setOpenMenu(false)
                }}
            >
                <DeleteIcon sx={{ pr: 1 }} />
                Delete
            </MenuItem>
        </MenuPopover>}
        {openConfirmDial && <ConfirmDialog
            open={openConfirmDial}
            onClose={onCloseConfirmDial}
            cancelText={'Cancel'}
            confirmText={'Delete'}
            title={'Are you sure to delete this color?'}
            content={`The color ${name} will be deleted!`}
            onConfirm={handleDeleteColor}
        />}
        {editColor && <AddUpdateColorDialog
            open={Boolean(editColor)}
            onClose={() => setEditColor(undefined)}
            color={editColor}
            onSubmit={handleUpdateColor}
       />}
    </>
}

export default ColorTableRow;
