import React, { useEffect, useState } from "react";
import { TextField, Stack, InputAdornment } from '@mui/material'
import Iconify from "./Iconify";
import { RestProps } from "../utils/types";

type Props = {
    onSearch: (keyword: string) => void,
    textFieldStyles?: any,
    defaultKeyword?: string,
}

type SearchbarProps = Props & RestProps

const Searchbar: React.FC<SearchbarProps> = ({ textFieldStyles, onSearch, defaultKeyword = '', ...props }) => {
    const [keyword, setKeyword] = useState<string>(defaultKeyword ?? '')

    const handleKeyDown = (e: any) => {
        if (e.keyCode === 13) onSearch(keyword)
    }

    useEffect(() => {
        setKeyword(defaultKeyword)
    }, [defaultKeyword])

    return (
        <Stack direction='row' alignItems='center' {...props}>
            <TextField
                size="small"
                value={keyword}
                onKeyDown={handleKeyDown}
                placeholder="Enter keyword here"
                sx={{ width: 350, ...textFieldStyles }}
                onChange={(e) => setKeyword(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <Iconify icon="eva:search-fill" sx={{ width: 20, height: 20 }} />
                    </InputAdornment>
                }}
            />
        </Stack>
    )
}

export default Searchbar;
