import React from "react";
import { Container, Card, Typography, Stack } from '@mui/material'
import LoginForm from "../../features/auth/login/LoginForm";
import Page from "../../components/Page";

const LoginPage: React.FC = () => {
    return (
        <Page title="Login" sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <Card sx={{ height: 1, borderRadius: 0, display: 'flex', px: 7 }}>
                    <Stack spacing={2} sx={{ width: 1 }} justifyContent='center'>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Sign In
                        </Typography>
                        <LoginForm />
                    </Stack>
                </Card>
            </Container>
        </Page>
    )
}

export default LoginPage;
