import { useTranslation } from 'react-i18next'
import React from "react";
import { Container } from '@mui/material'
import Page from "../../components/Page";
import PersonalSettingContainer from '../../features/user/personal-settings';

const PersonalSettingPage: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'personalSettings' })
    return (
        <Page title={t('pageTitle')} sx={{ height: 1 }}>
            <Container maxWidth='md' sx={{ height: 1 }}>
                <PersonalSettingContainer />
            </Container>
        </Page>
    )
}

export default PersonalSettingPage;
