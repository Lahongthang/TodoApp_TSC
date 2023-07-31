import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { RestProps } from '../utils/types'

type Props = {
    open: boolean,
    title: string,
    cancelText: string,
    confirmText: string,
    content: string,
    onClose: () => void,
    onConfirm: () => void,
}

type ConfirmDialogProps = Props & RestProps

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    open, title, content,
    cancelText, confirmText,
    onClose, onConfirm, ...props
}) => {
    return (
        <Dialog fullWidth
            maxWidth='xs'
            open={open}
            onClose={onClose}
            {...props}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogActions>
                <Button size='small' color='inherit' onClick={onClose}>
                    {cancelText}
                </Button>
                <Button size='small' variant='contained' onClick={onConfirm}>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;
