import { useTranslation } from 'react-i18next'
import React from 'react'
import { Container } from '@mui/material'
import Page from '../../components/Page'
import IssueManagementContainer from '../../features/issues'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'

const IssuesPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    return <Page title={t('pageTitle')}>
        <Container maxWidth='lg'>
            <HeaderBreadcrumbs
                heading={t('header.heading')}
            />
            <IssueManagementContainer />
        </Container>
    </Page>
}

export default IssuesPage;
