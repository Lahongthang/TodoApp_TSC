import React from 'react'
import { Container } from '@mui/material'
import Page from '../../components/Page'
import IssueManagementContainer from '../../features/issues'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'

const IssuesPage: React.FC = () => {
    return <Page title='Color Management'>
        <Container maxWidth='lg'>
            <HeaderBreadcrumbs
                heading='Issue management'
            />
            <IssueManagementContainer />
        </Container>
    </Page>
}

export default IssuesPage;
