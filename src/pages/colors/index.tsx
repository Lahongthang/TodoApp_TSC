import React from 'react'
import { Container } from '@mui/material'
import Page from '../../components/Page'
import ColorManagement from '../../features/colors'

const ColorsPage: React.FC = () => {
    return <Page title='Color Management'>
        <Container maxWidth='lg'>
            <ColorManagement />
        </Container>
    </Page>
}

export default ColorsPage;
