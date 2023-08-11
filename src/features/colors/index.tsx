import React from 'react'
import { Stack, Button } from '@mui/material'
import ColorTable from './table/ColorTable';
import AddUpdateColorDialog from './dialog/AddUpdateColorDialog';
import { dispatch } from '../../app/store';
import { colorApi } from '../../app/services/color/colorApi';
import { useAuth, useToggle } from '../../hooks';

const ColorManagement: React.FC = () => {
    const { auth } = useAuth()
    const { toggle: open, onOpen, onClose} = useToggle()

    const handleSubmit = async (data: any) => {
        const bodyData = {
            name: data.name,
            userId: auth.user?.id
        }
        try {
            await dispatch(colorApi.endpoints.addColor.initiate({data: bodyData})).unwrap()
            onClose()
        } catch (error) {
            console.error(error)
        }
    }
    
    return <>
        <Stack spacing={2}>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='flex-end'>
                <Button size='small'
                    variant='contained'
                    onClick={onOpen}>
                    Add color
                </Button>
            </Stack>
            <ColorTable />
        </Stack>
        {open && <AddUpdateColorDialog
            open={open}
            onClose={onClose}
            onSubmit={handleSubmit}
        />}
    </>
}

export default ColorManagement;
