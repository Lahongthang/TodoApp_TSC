import { useTranslation } from "react-i18next";
import React from "react";
import { Container } from "@mui/material";
import Page from "../../components/Page";
import ResetPasswordContainer from "../../features/reset-password";

const ResetPasswordPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword' })
    return (
        <Page title={t('pageTitle')} sx={{ height: 1 }}>
            <Container maxWidth='sm' sx={{ height: 1 }}>
                <ResetPasswordContainer />
            </Container>
        </Page>
    )
}

export default ResetPasswordPage;
