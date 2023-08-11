import React from "react";
import { Typography, Stack, IconButton, Divider, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { RestProps } from "../../../utils/types";
import MenuPopover from "../../MenuPopover";
import CustomTimeForm from "./CustomTimeForm";
import { FormProvider } from "../../hook-form";
import Iconify from "../../Iconify";
import useFilterParams from "../useFilterParams";
import { LoadingButton } from "@mui/lab";
import { isEqual } from "lodash";
import { FilterOptions } from "./constants";

type Props = {
    t: any,
    open: any,
    onClose: () => void,
    sx?: any,
}

type CustomTimePopoverProps = Props & RestProps

const FORM_ID = 'custom-filter-time-form'

const CustomTimePopover: React.FC<CustomTimePopoverProps> = ({ t, open, sx, onClose, ...props }) => {
    const { setParam, values } = useFilterParams()
    const { period } = values?.time ?? {}

    const defaultValues = {
        fromDate: period?.fromDate ?? null,
        toDate: period?.toDate ?? null,
    }

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
    })

    const { handleSubmit, watch } = methods

    const handleSelectTime = (period: any) => {
        const customOpt = FilterOptions(t)?.find((opt: any) => opt.value === 'custom')
        setParam('time', { id: customOpt?.id, value: customOpt?.value, period })
        onClose()
    }

    const handleReset = () => {
        setParam('time', null)
        onClose()
    }

    return (
        <MenuPopover
            open={open}
            onClose={onClose}
            sx={{
                mt: 0.5,
                '& .MuiPaper-root': {
                    width: 250,
                    borderRadius: 2,
                },
            }}
            {...props}
        >
            <Stack spacing={1}>
                <Stack>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant="subtitle2">
                            Select time
                        </Typography>
                        <IconButton size="small"
                            sx={{ borderRadius: 2 }}
                            onClick={onClose}
                        >
                            <Iconify icon="eva:close-fill" />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />
                </Stack>

                <FormProvider id={FORM_ID} methods={methods} onSubmit={handleSubmit(handleSelectTime)}>
                    <CustomTimeForm />
                </FormProvider>

                <Stack direction='row' justifyContent='flex-end'>
                    <Button size="small"
                        color="inherit"
                        disabled={!values?.time}
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                    <LoadingButton size="small"
                        type="submit"
                        form={FORM_ID}
                        disabled={
                            !watch('fromDate') || !watch('toDate') ||
                            (isEqual(period?.fromDate, watch('fromDate')) && isEqual(period?.toDate, watch('toDate')))
                        }
                    >
                        Apply
                    </LoadingButton>
                </Stack>
            </Stack>
        </MenuPopover>
    )
}

export default CustomTimePopover;
