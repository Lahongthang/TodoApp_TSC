import React from "react";
import { TableHead, TableRow, TableCell } from '@mui/material'
import { HeadConfigItem } from "./types";

type Props = {
    headConfig: HeadConfigItem[],
}

const TableHeadCustom: React.FC<Props> = ({ headConfig }) => {
    return <TableHead>
        <TableRow>
            {headConfig.map((item: HeadConfigItem) => {
                const { id, align, label, width } = item ?? {}
                return (
                    <TableCell key={id}
                        align={align}
                        sx={{ width: width }}>
                        {label}
                    </TableCell>
                )
            })}
        </TableRow>
    </TableHead>
}

export default TableHeadCustom;
