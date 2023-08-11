import React, { useState } from "react";
import { IconButton, Popover, Stack, MenuItem } from '@mui/material'
import Image from "../../components/Image";
import { useLocales } from "../../hooks";
import MenuPopover from "../../components/MenuPopover";

const LanguagePopover: React.FC = () => {
    const { currentLang, allLangs, onChangeLang } = useLocales()

    const [open, setOpen] = useState<any>(null)

    const handleChangeLang = (newLang: any) => {
        onChangeLang(newLang)
        setOpen(null)
    }

    return (
        <>
            <IconButton sx={{ width: 48, height: 48 }}
                onClick={(e) => setOpen(e.currentTarget)}>
                <Image
                    disabledEffect
                    src={currentLang.icon}
                    alt={currentLang.label}
                    sx={{ width: 28, height: 20 }}
                />
            </IconButton>
            <MenuPopover
                open={open}
                onClose={() => setOpen(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Stack spacing={0.75}>
                    {allLangs.map((option) => (
                        <MenuItem key={option.value}
                            selected={option.value === currentLang.value}
                            onClick={() => handleChangeLang(option.value)}
                        >
                            <Image
                                disabledEffect
                                alt={option.label}
                                src={option.icon}
                                sx={{ width : 28, mr: 2 }}
                            />
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </MenuPopover>
        </>
    )
}

export default LanguagePopover;
