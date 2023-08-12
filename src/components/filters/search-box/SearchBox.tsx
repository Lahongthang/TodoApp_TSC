import React, { useState } from "react";
import { Autocomplete, InputAdornment, ListItemButton, ListItemText, TextField, Stack } from '@mui/material'
import { RestProps } from "../../../utils/types";
import Iconify from "../../Iconify";

type Props = {
    defaultKeyword?: string,
    options: string[],
    placeholder?: string,
    allowTypingSearch?: boolean,
    textFieldStyles?: any,
    sx?: any,
    onSearch: (keyword: string) => void,
}

type SearchBoxProps = Props & RestProps

const SearchBox: React.FC<SearchBoxProps> = ({
    defaultKeyword = '',
    allowTypingSearch = false,
    options,
    sx,
    placeholder,
    textFieldStyles,
    onSearch,
    ...props
}) => {
    const [keyword, setKeyword] = useState<string>(defaultKeyword)

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) onSearch(keyword)
    }

    const handleTextChange = (e: any, newInputValue: any, reason: any) => {
        if (!e?.target) return;
        if (reason === 'clear') {
            setKeyword('')
            onSearch?.('')
        }
        else {
            const text = e.target.value
            setKeyword(text)
            if (allowTypingSearch) onSearch?.(text)
        }
    }

    return (
        <Autocomplete
            size="small"
            fullWidth
            freeSolo
            options={options}
            onKeyDown={handleKeyDown}
            onInputChange={handleTextChange}
            onChange={(e, value) => {
                if (value) onSearch(value)
            }}
            sx={{ width: 300, ...sx }}
            renderInput={(params) => {
                const forwardProps = (({InputLabelProps, ...rest}) => rest)(params)
                return <TextField
                    {...forwardProps}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={placeholder}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: <InputAdornment position="start">
                            <Iconify icon="eva:search-fill" sx={{ width: 20, height: 20 }} />
                        </InputAdornment>
                    }}
                    {...textFieldStyles}
                />
            }}
            renderOption={(props, option: any) => {
                return (
                    <ListItemButton dense
                        key={option}
                        component='li'
                        sx={{ height: 40 }}
                        {...props}
                    >
                        <Stack direction='row' alignItems='center'>
                            <ListItemText primary={option} />
                            <Iconify
                                icon="solar:history-linear"
                                sx={{ width: 20, height: 20, position: 'absolute', right: 4 }}
                            />
                        </Stack>
                    </ListItemButton>
                )
            }}
            {...props}
        />
    )
}

export default SearchBox;
