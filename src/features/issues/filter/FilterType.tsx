import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import { MenuItem, Stack, Checkbox, Typography } from '@mui/material'
import FilterButtonPopover from "../../../components/filters/buttons/FilterButtonPopover";
import useFilterParams from "../../../components/filters/useFilterParams";
import { IssueTypes } from "../utils";
import { getFilterLabel } from "./utils";

const FilterType: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { values, setParam } = useFilterParams()
    const { type } = values ?? {}

    const handleFilter = (value: any) => {
        setParam('type', value)
    }

    const handleReset = () => {
        setParam('type', null)
    }

    const label = useMemo(() => {
        return getFilterLabel(t, 'type', IssueTypes, type)
    }, [t, type])

    return (
        <FilterButtonPopover
            value={type}
            label={label}
            onReset={handleReset}
            options={IssueTypes(t)}
            onSelect={handleFilter}
            title={t('filters.type.title')}
            renderItem={(item, selected, handleChange) => (
                <MenuItem key={item.id} selected={selected} onClick={() => handleChange(item)}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Checkbox size="small" checked={selected} sx={{ p: 0 }} />
                        <Typography variant="body1">
                            {item.label}
                        </Typography>
                    </Stack>
                </MenuItem>
            )}
        />
    )
}

export default FilterType;
