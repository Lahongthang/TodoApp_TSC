import { Trans } from 'react-i18next'
import { startOfDay, startOfWeek, startOfMonth, subWeeks, subMonths, addDays, endOfWeek, endOfMonth } from 'date-fns'
import { FilterTimeTypes } from "./constants";
import { getShortLabelRangeDate } from '../../../utils/datetime/formatHelper';

export const defineFilterTime = (value: any) => {
    const cur = new Date()
    cur.setHours(23, 59, 59, 999)
    const startToDay = startOfDay(cur).setHours(0, 0, 0, 0)
    const startThisWeek = addDays(startOfWeek(subWeeks(cur, 0)), 1).setHours(0, 0, 0, 0)
    const startThisMonth = addDays(startOfMonth(subMonths(cur, 0)), 1).setHours(0, 0, 0, 0)
    const startLastWeek = addDays(startOfWeek(subWeeks(cur, 1)), 1).setHours(0, 0, 0, 0)
    const startLastMonth = addDays(startOfMonth(subMonths(cur, 1)), 1).setHours(0, 0, 0, 0)

    switch (value) {
        case FilterTimeTypes.Today:
            return {
                fromDate: startToDay,
                toDate: cur,
            }
        case FilterTimeTypes.ThisWeek:
            return {
                fromDate: startThisWeek,
                toDate: cur,
            }
        case FilterTimeTypes.LastWeek:
            return {
                fromDate: startLastWeek,
                toDate: endOfWeek(startLastWeek).setUTCHours(23, 59, 59, 999),
            }
        case FilterTimeTypes.ThisMonth:
            return {
                fromDate: startThisMonth,
                toDate: cur,
            }
        case FilterTimeTypes.LastMonth:
            return {
                fromDate: startLastMonth,
                toDate: endOfMonth(startLastMonth).setUTCHours(23, 59, 59, 999),
            }
        default: return null
    }
}

export const getLabel = (t: any, filterOptions: any, time: any, currLang: any) => {
    if (!time) return t('filterTime.label')

    const filteredOpt = filterOptions(t).find((opt: any) => opt.value === time?.value)

    const { fromDate, toDate } = time?.period ?? {}
    const fPeriod = fromDate && toDate ? getShortLabelRangeDate(fromDate, toDate, currLang) : ''

    const suffixLabel = filteredOpt?.value !== FilterTimeTypes.Custom ? filteredOpt?.label : fPeriod

    const label = <Trans
        defaults={t('filterTime.labelWithValue', { value: suffixLabel })}
        components={{ custom: <span style={{ fontWeight: 'bold' }} /> }}
    />

    return label
}
