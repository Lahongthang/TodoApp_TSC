import { useTranslation, Trans } from "react-i18next";
import React from "react";
import { MenuItem, Stack, Checkbox, Typography } from '@mui/material'
import { isEmpty } from "lodash";
import FilterButtonPopover from "../../../components/filters/FilterButtonPopover";
import useFilterParams from "../../../components/filters/useFilterParams";
import { IssueTypes } from "../utils";

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

    const filteredLabels = IssueTypes(t)?.filter((t: any) => type?.includes(t.id))
        ?.map((t: any) => t.label)

    const suffixLabel = isEmpty(filteredLabels) ? t('filters.noneValue')
        : filteredLabels?.length > 2 ? `(${filteredLabels.length})`
        : filteredLabels?.join(', ')

    const label = <Trans
        defaults={t('filters.type.label', { value: suffixLabel })}
        components={{ custom: <span style={{ fontWeight: "bold" }} /> }}
    />

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
