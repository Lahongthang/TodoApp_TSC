import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import { MenuItem, Stack, Checkbox, Typography } from '@mui/material'
import FilterButtonPopover from "../../../components/filters/buttons/FilterButtonPopover";
import useFilterParams from "../../../components/filters/useFilterParams";
import { IssuePriorities } from "../utils";
import { getFilterLabel } from "./utils";

const FilterPriority: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { values, setParam } = useFilterParams()
    const { priority } = values ?? {}

    const handleFilter = (value: any) => {
        setParam('priority', value)
    }

    const handleReset = () => {
        setParam('priority', null)
    }

    const label = useMemo(() => {
        return getFilterLabel(t, 'priority', IssuePriorities, priority)
    }, [t, priority])

    return (
        <FilterButtonPopover
            label={label}
            value={priority}
            onReset={handleReset}
            onSelect={handleFilter}
            options={IssuePriorities(t)}
            title={t('filters.priority.title')}
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

export default FilterPriority;
