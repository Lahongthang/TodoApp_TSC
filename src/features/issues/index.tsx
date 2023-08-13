import React from 'react'
import { Stack } from '@mui/material'
import FilterContextProvider from '../../components/filters/FilterContextProvider';
import IssueManagement from './IssueManagement';
import FilterToolbar from './filter';
import SearchHistoryProvider from '../../components/filters/search-box/SearchHistoryProvider';

const IssueManagementContainer: React.FC = () => {
    const filterId = 'issue-management'
    const searchId = 'search-issue'

    return (
        <FilterContextProvider uiId={filterId}>
            <SearchHistoryProvider uiId={searchId}>
                <Stack spacing={5}>
                    <FilterToolbar />
                    <IssueManagement />
                </Stack>
            </SearchHistoryProvider>
        </FilterContextProvider>
    )
}

export default IssueManagementContainer;
