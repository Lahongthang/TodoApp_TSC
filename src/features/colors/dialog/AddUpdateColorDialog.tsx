import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from "../../../components/hook-form";
import ColorForm from "./ColorForm";
import { ColorItemType } from "../../../utils/types/color";
import { ColorSchema } from "../../../utils/validations/color/ColorSchema";

type Props = {
    open: boolean,
    onClose: () => void,
    color?: ColorItemType,
    onSubmit: (data: object) => void,
}

const FORM_ID = 'color-form'

const AddUpdateColorDialog: React.FC<Props> = ({ open, color, onClose, onSubmit }) => {
    const isEditMode = !!color

    const defaultValues = {
        name: color?.name ?? '',
    }
    const methods = useForm({
        resolver: yupResolver(ColorSchema()),
        defaultValues,
        mode: 'onSubmit',
    })
    const { handleSubmit } = methods

    return (
        <Dialog fullWidth open={open} maxWidth='xs' onClose={onClose}>
            <DialogTitle>{isEditMode ? 'Edit color' : 'Add color'}</DialogTitle>
            <DialogContent>
                <FormProvider id={FORM_ID}
                    methods={methods}
                    onSubmit={handleSubmit(onSubmit)}>
                    <ColorForm />
                </FormProvider>
            </DialogContent>
            <DialogActions>
                <Button size="small"
                    color="inherit"
                    onClick={onClose}>
                    Cancel
                </Button>
                <LoadingButton
                    type="submit"
                    size="small"
                    variant="contained"
                    form={FORM_ID}>
                    {isEditMode ? 'Edit' : 'Add'}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default AddUpdateColorDialog;
