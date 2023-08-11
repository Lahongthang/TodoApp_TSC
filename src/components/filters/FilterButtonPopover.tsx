import React, { ReactNode, useState } from "react";
import FilterButton from "./FilterButton";
import FilterPopover from "./FilterPopover";

type FilterButtonPopoverProps = {
    value: any,
    label: any,
    title: string,
    options: any,
    onSelect: (value: any) => void,
    onReset: () => void,
    renderItem?: (item: any, selected: boolean, handleChange: (id: any) => void) => ReactNode,
}

const FilterButtonPopover: React.FC<FilterButtonPopoverProps> = ({ value, title, label, options, renderItem, onSelect, onReset }) => {
    const [open, setOpen] = useState<any>(null)

    return (
        <>
            <FilterButton
                label={label}
                open={Boolean(open)}
                onOpen={(e: any) => setOpen(e.currentTarget)}
            />
            {open && <FilterPopover
                open={open}
                value={value}
                title={title}
                options={options}
                onReset={onReset}
                onClose={() => setOpen(null)}
                onSelect={onSelect}
                renderItem={renderItem}
            />}
        </>
    )
}

export default FilterButtonPopover;
