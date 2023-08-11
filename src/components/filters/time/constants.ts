export const FilterOptions = (t: any) => ([
    {
        id: 1,
        value: 'today',
        label: t('filterTime.options.today'),
    },
    {
        id: 2,
        value: 'thisWeek',
        label: t('filterTime.options.thisWeek'),
    },
    {
        id: 3,
        value: 'lastWeek',
        label: t('filterTime.options.lastWeek'),
    },
    {
        id: 4,
        value: 'thisMonth',
        label: t('filterTime.options.thisMonth'),
    },
    {
        id: 5,
        value: 'lastMonth',
        label: t('filterTime.options.lastMonth'),
    },
    {
        id: 6,
        value: 'custom',
        label: t('filterTime.options.custom'),
    },
])

export const FilterTimeTypes = {
    Today: 'today',
    ThisWeek: 'thisWeek',
    LastWeek: 'lastWeek',
    ThisMonth: 'thisMonth',
    LastMonth: 'lastMonth',
    Custom: 'custom',
}
