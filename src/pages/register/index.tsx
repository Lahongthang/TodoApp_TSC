import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material'
import Page from "../../components/Page";
import RegisterConttainer from '../../features/auth/register';

const RegisterPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    return (
        <Page title={t('pageTitle')} sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <RegisterConttainer />
            </Container>
        </Page>
    )
}

export default RegisterPage;
