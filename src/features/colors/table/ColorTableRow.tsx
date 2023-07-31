import React, { useState } from "react"
import { TableCell, Box, IconButton, Popover, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableRowStyle } from "./styles"
import { transformToCapitalize, transformToLowerCase } from "../../../utils/transformText";
import { RestProps } from "../../../utils/types";
import { useToggle } from "../../../hooks";
import ConfirmDialog from "../../../components/ConfirmDialog";
import { dispatch } from "../../../app/store";
import { ColorItem } from "../../../utils/types/color";
import { colorApi } from "../../../app/services/color/colorApi";
import AddUpdateColorDialog from "../dialog/AddUpdateColorDialog";

type Props = {
    color: ColorItem
}

type ColorTableRowProps = Props & RestProps

const ColorTableRow: React.FC<ColorTableRowProps> = ({ color, ...props }) => {
    const { _id, name } = color ?? {}

    const [openMenu, setOpenMenu] = useState<any>(null)
    const [editColor, setEditColor] = useState<ColorItem>()
    const { toggle: openConfirmDial, onOpen: onOpenConfirmDial, onClose: onCloseConfirmDial } = useToggle()

    const handleDeleteColor = async () => {
        try {
            await dispatch(colorApi.endpoints.deleteColor.initiate(_id)).unwrap()
            onCloseConfirmDial()
        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdateColor = async (data: object) => {
        console.log({data})
        try {
            await dispatch(colorApi.endpoints.updateColor.initiate({id: _id, data})).unwrap()
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
        {openMenu && <Popover
            open={Boolean(openMenu)}
            anchorEl={openMenu}
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
        </Popover>}
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
