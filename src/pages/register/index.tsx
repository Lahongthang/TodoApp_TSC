import { useTranslation } from 'react-i18next'
import React from "react";
import { Container, Card, Typography, Stack, alpha } from '@mui/material'
import Page from "../../components/Page";
import RegisterConttainer from '../../features/auth/register';

const RegisterPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'register' })
    return (
        <Page title={t('title')} sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <Card sx={{
                    px: 7,
                    height: 1,
                    display: 'flex',
                    borderRadius: 0,
                    backgroundColor: theme => alpha(theme.palette.primary.light, 0.03)
                }}>
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
