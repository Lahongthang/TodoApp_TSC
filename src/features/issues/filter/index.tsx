import React from "react";
import { Stack } from '@mui/material'
import FilterType from "./FilterType";
import FilterPriority from "./FilterPriority";
import ResetButton from "./ResetButton";
import SearchFilter from "./SearchFilter";
import FilterAssignee from "./FilterAssignee";
import FilterTime from "../../../components/filters/time/FilterTime";

type FilterToolbarProps = {

}

const FilterToolbar: React.FC<FilterToolbarProps> = () => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <SearchFilter />
            <Stack direction='row' alignItems='center' spacing={1}>
                <ResetButton />
                <FilterType />
                <FilterPriority />
                <FilterAssignee />
                <FilterTime />
            </Stack>
        </Stack>
    )
}

export default FilterToolbar;
