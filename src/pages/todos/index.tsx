import React from 'react'
import { Container } from '@mui/material'
import Page from '../../components/Page'
import TodoManagement from '../../features/todos'

const TodosPage: React.FC = () => {
    return <Page title='Color Management'>
        <Container maxWidth='lg'>
            <TodoManagement />
        </Container>
    </Page>
}

export default TodosPage;
