import { TableRow, styled } from '@mui/material'

export const TableRowStyle = styled(TableRow)(({ theme }) => ({
    '& td': {
        border: 'none',
    },
    height: '43px',
}))
