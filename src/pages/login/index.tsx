import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material'
import Page from "../../components/Page";
import LoginContainer from '../../features/auth/login';

const LoginPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'login' })
    return (
        <Page title={t('pageTitle')} sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <LoginContainer />
            </Container>
        </Page>
    )
}

export default LoginPage;
