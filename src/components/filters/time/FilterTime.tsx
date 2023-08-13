import { useTranslation, Trans } from "react-i18next";
import React, { useState } from "react";
import { FilterOptions, FilterTimeTypes } from "./constants";
import FilterPopover from "../buttons/FilterPopover";
import useFilterParams from "../useFilterParams";
import FilterButton from "../buttons/FilterButton";
import { defineFilterTime } from "./utils";
import CustomTimePopover from "./CustomTimePopover";
import { getShortLabelRangeDate } from "../../../utils/datetime/formatHelper";
import { useLocales } from "../../../hooks";

const FilterTime: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'filters' })
    const { currentLang } = useLocales()
    const { values, setParam } = useFilterParams()
    const { time } = values ?? {}

    const [openTimeSelection, setOpenTimeSelection] = useState<any>(null)
    const [openCustomTime, setOpenCustomTime] = useState<any>(null)

    const handleSelect = (ids: any) => {
        const selectedOpt = FilterOptions(t)?.find((opt: any) => opt.id === ids[0])
        const { value } = selectedOpt ?? {}
        if (value !== FilterTimeTypes.Custom) {
            const period = defineFilterTime(value)
            setParam('time', { id: ids[0], value, period })
            setOpenTimeSelection(null)
        } else {
            setOpenCustomTime(openTimeSelection)
        }
    }

    const handleReset = () => {
        setParam('time', null)
    }

    const filteredOpt = FilterOptions(t).find((opt: any) => opt.value === time?.value)
    const { fromDate, toDate } = time?.period ?? {}
    const fPeriod = fromDate && toDate ? getShortLabelRangeDate(fromDate, toDate, currentLang.value) : ''

    const suffixLabel = !time ? t('filterTime.noneValue')
        : filteredOpt?.value !== FilterTimeTypes.Custom ? filteredOpt?.label
        : fPeriod

    const label = <Trans
        defaults={t('filterTime.label', { value: suffixLabel })}
        components={{ custom: <span style={{ fontWeight: 'bold' }} /> }}
    />

    return (
        <>
            <FilterButton
                open={openTimeSelection}
                onOpen={(e) => {
                    if (time?.value === FilterTimeTypes.Custom) setOpenCustomTime(e.currentTarget)
                    else setOpenTimeSelection(e.currentTarget)
                }}
                label={label}
            />
            {openTimeSelection && !openCustomTime && (
                <FilterPopover
                    open={openTimeSelection}
                    onClose={() => setOpenTimeSelection(null)}
                    value={time && [time?.id]}
                    title={'Select time'}
                    options={FilterOptions(t)}
                    onSelect={handleSelect}
                    multiple={false}
                    onReset={handleReset}
                />
            )}
            {openCustomTime && (
                <CustomTimePopover
                    t={t}
                    open={openCustomTime}
                    onClose={() => {
                        setOpenCustomTime(null)
                        setOpenTimeSelection(null)
                    }}
                />
            )}
        </>
    )
}

export default FilterTime;
