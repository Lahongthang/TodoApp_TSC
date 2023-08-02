import { useTranslation } from 'react-i18next'
import React from "react";
import { Container, Card, Typography, Stack } from '@mui/material'
import Page from "../../components/Page";
import RegisterConttainer from '../../features/auth/register';

const RegisterPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    return (
        <Page title={t('title')} sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <Card sx={{ height: 1, borderRadius: 0, display: 'flex', px: 7 }}>
                    <Stack spacing={2} sx={{ width: 1 }} justifyContent='center'>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {t('title')}
                        </Typography>
                        <RegisterConttainer />
                    </Stack>
                </Card>
            </Container>
        </Page>
    )
}

export default RegisterPage;
