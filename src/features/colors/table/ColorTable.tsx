import React from "react";
import { TableContainer, Table, TableBody } from '@mui/material'
import { HeadConfigItem, TableHeadCustom } from "../../../components/table";
import { useGetAllColorQuery } from "../../../app/services/color/colorApi";
import ColorTableRow from "./ColorTableRow";
import { ColorItem } from "../../../utils/types/color";

const headConfig: HeadConfigItem[] = [
    { id: 'name', label: 'Name', width: '45%', align: 'left' },
    { id: 'color', label: 'Color', width: '45%', align: 'left' },
    { id: 'moreMenu', label: '', width: '10%', align: 'center' },
]

const ColorTable: React.FC = () => {
    const { data } = useGetAllColorQuery({})

    return <TableContainer>
        <Table size="small" stickyHeader>
            <TableHeadCustom headConfig={headConfig} />
            <TableBody>
                {data?.map((color: ColorItem) => {
                    return <ColorTableRow key={color._id} color={color} />
                })}
            </TableBody>
        </Table>
    </TableContainer>
}

export default ColorTable;
