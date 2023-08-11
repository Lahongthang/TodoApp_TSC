import React from 'react'
import { Stack } from '@mui/material'
import FilterContextProvider from '../../components/filters/FilterContextProvider';
import useFilter from '../../components/filters/userFilter';
import IssueManagement from './IssueManagement';
import FilterToolbar from './filter';

const IssueManagementContainer: React.FC = () => {
    const { uiId } = useFilter({
        fixedKey: 'issue-management',
        defaultValues: {}
    })

    return (
        <FilterContextProvider uiId={uiId}>
            <Stack spacing={5}>
                <FilterToolbar />
                <IssueManagement />
            </Stack>
        </FilterContextProvider>
    )
}

export default IssueManagementContainer;
