import { Trans } from 'react-i18next'
import { isEmpty, isFunction } from "lodash"

type FilterTypes = 'type' | 'priority' | 'assignee'

export const getFilterLabel = (t: any, type: FilterTypes, filterOptions: any, filterValue: any) => {
    if (isEmpty(filterValue)) return t(`filters.${type}.label`)

    const filteredLabels = isFunction(filterOptions)
        ? filterOptions(t)?.filter((t: any) => filterValue?.includes(t.id))?.map((t: any) => t.label)
        : filterOptions.filter((t: any) => filterValue?.includes(t.id))?.map((t: any) => t.label)

    const suffixLabel = filteredLabels?.length > 2 ? `(${filteredLabels.length})` : filteredLabels?.join(', ')

    const label = <Trans
        defaults={t(`filters.${type}.labelWithValue`, { value: suffixLabel })}
        components={{ custom: <span style={{ fontWeight: "bold" }} /> }}
    />

    return label;
}
