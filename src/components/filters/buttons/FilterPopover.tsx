import { useTranslation } from "react-i18next";
import React, { ReactNode, useEffect, useState } from "react";
import { Stack, MenuItem, Button, IconButton, Typography, Divider } from '@mui/material'
import { isEmpty, isEqual } from "lodash";
import { RestProps } from "../../../utils/types";
import Iconify from "../../Iconify";
import Scrollbar from "../../Scrollbar";
import MenuPopover from "../../MenuPopover";
import StateManager from "../../StateManager";
import { LoadingState } from "./LoadingState";

type Props = {
    open: any,
    sx?: any,
    value: any,
    title: string,
    options: any,
    state?: 'default' | "success" | "idle" | "loading" | "empty" | "error",
    multiple?: boolean,
    onClose: () => void,
    renderItem?: (item: any, selected: boolean, handleChange: (id: any) => void) => ReactNode,
    onReset?: () => void,
    onSelect: (value: any) => void,
}

type FilterPopoverProps = Props & RestProps

const ITEM_HEIGHT = 32

const FilterPopover: React.FC<FilterPopoverProps> = ({
    open, value, title, onClose, sx, options,
    renderItem, onReset, onSelect,
    multiple = true, state = 'success', ...props
}) => {
    const { t } = useTranslation('translations', { keyPrefix: 'filters' })
    const [currValue, setCurrValue] = useState<any>(value)

    const handleChange = (item: any) => {
        if (!multiple) return setCurrValue([item.id])
        if (!currValue) return setCurrValue([item.id])
        if (!currValue?.includes(item.id)) setCurrValue([...currValue, item.id])
        else setCurrValue(currValue?.filter((val: any) => val !== item.id))
    }

    useEffect(() => {
        setCurrValue(value)
    }, [value])

    return (
        <MenuPopover open={open}
            onClose={onClose}
            sx={{
                mt: 0.5,
                '& .MuiPaper-root': {
                    width: 200,
                    borderRadius: 2,
                },
            }}
            {...props}
        >
            <Stack spacing={1}>
                <Stack>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Typography variant="subtitle2" sx={{ px: 1 }}>
                            {title}
                        </Typography>
                        <IconButton size="small" sx={{ borderRadius: 2 }} onClick={onClose}>
                            <Iconify icon="eva:close-fill" />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ borderStyle: 'dashed', mt: 0.5 }} />
                </Stack>
                <Scrollbar sx={{ height: ITEM_HEIGHT * 5 }}>
                    <StateManager state={state} loadingState={<LoadingState />}>
                        <Stack sx={{ height: 1 }}>
                            {options?.map((item: any) => {
                                const selected = !!currValue?.includes(item.id)
                                return renderItem?.(item, selected, handleChange) ?? (
                                    <MenuItem key={item.id} selected={selected} onClick={() => handleChange?.(item)}>
                                        <Stack direction='row' alignItems='center' spacing={1}>
                                            {item.label}
                                        </Stack>
                                    </MenuItem>
                                )
                            })}
                        </Stack>
                    </StateManager>
                </Scrollbar>
                <Stack direction='row' justifyContent='flex-end'>
                    <Button size="small"
                        color="inherit"
                        disabled={isEmpty(value)}
                        onClick={() => {
                            onReset?.()
                            onClose()
                        }
                    }>
                        {t('actions.reset')}
                    </Button>
                    <Button size="small"
                        disabled={isEqual(value, currValue) || (isEmpty(value) && isEmpty(currValue))}
                        onClick={() => {
                            onSelect(currValue)
                            onClose()
                        }
                    }>
                        {t('actions.apply')}
                    </Button>
                </Stack>
            </Stack>
        </MenuPopover>
    )
}

export default FilterPopover;
