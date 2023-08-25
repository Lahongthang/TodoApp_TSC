import { useTranslation } from "react-i18next";
import React from "react";
import { Stack } from "@mui/material";
import BaseCompleteCard from '../../components/CompleteCard'
import { LinkButton } from "../../components/buttons";


const CompleteCard: React.FC = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'resetPassword.completeCard'})
    
    return (
        <BaseCompleteCard
            sx={{ width: 1 }}
            cardTitle={t('cardTitle')}
            title={t('title')}
            action={
                <Stack spacing={3}
                    direction='row'
                    sx={{ width: 1 }}
                    justifyContent='flex-end'>
                    <LinkButton
                        text={t('actions.signIn')}
                        to="/login"
                    />
                    <LinkButton
                        to="/register"
                        text={t('actions.createNewAccount')}
                    />
                </Stack>
            }
        />
    )
}

export default CompleteCard;
