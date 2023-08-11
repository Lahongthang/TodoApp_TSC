import { useTranslation, Trans } from "react-i18next";
import React from "react";
import { MenuItem, Stack, Checkbox, Typography } from '@mui/material'
import { isEmpty } from "lodash";
import FilterButtonPopover from "../../../components/filters/FilterButtonPopover";
import useFilterParams from "../../../components/filters/useFilterParams";
import { IssuePriorities } from "../utils";

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

    const filteredLabels = IssuePriorities(t)?.filter((p: any) => priority?.includes(p.id))
        ?.map((p: any) => p.label)

    const suffixLabel = isEmpty(filteredLabels) ? t('filters.noneValue')
        : filteredLabels?.length > 2 ? `(${filteredLabels.length})`
        : filteredLabels?.join(', ')

    const label = <Trans
        defaults={t('filters.priority.label', { value: suffixLabel })}
        components={{ custom: <span style={{ fontWeight: "bold" }} /> }}
    />

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
