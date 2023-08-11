import { startOfDay, startOfWeek, startOfMonth, subWeeks, subMonths, addDays, endOfWeek, endOfMonth } from 'date-fns'
import { FilterTimeTypes } from "./constants";

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
