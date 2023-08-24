import React from "react";
import { Button, Stack } from "@mui/material";
import BaseCompleteCard from '../../../../components/CompleteCard'
import Iconify from "../../../../components/Iconify";

type CompleteCardProps = {
    t: any,
}

const CompleteCard: React.FC<CompleteCardProps> = ({ t }) => {
    return (
        <BaseCompleteCard
            sx={{ width: 1 }}
            cardTitle={t('completeCard.cardTitle')}
            title={t('completeCard.title')}
            action={<Stack direction='row' spacing={3} justifyContent='flex-end' sx={{ width: 1 }}>
                <Button
                    size="small"
                    href="login"
                    startIcon={<Iconify icon="basil:login-solid" />}>
                    {t('completeCard.actions.signIn')}
                </Button>
                <Button
                    size="small"
                    href="register"
                    startIcon={<Iconify icon="ic:outline-create" />}>
                    {t('completeCard.actions.createNewAccount')}
                </Button>
            </Stack>}
        />
    )
}

export default CompleteCard;
