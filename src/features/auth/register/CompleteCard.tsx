import { Trans, useTranslation } from 'react-i18next'
import React from "react";
import { Stack, Typography } from '@mui/material'
import BaseCompleteCard from '../../../components/CompleteCard'
import { LinkButton } from '../../../components/buttons';

type CompleteCardProps = {
    data: any,
}

const CompleteCard: React.FC<CompleteCardProps> = ({ data }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'register.completeCard' })

    const { email, username } = data ?? {}

    return (
        <BaseCompleteCard
            sx={{ mt: 5 }}
            cardTitle={t('cardTitle')}
            title={t('title')}
            content={
                <Stack>
                    <Typography variant="body2" align="center">
                        <Trans
                            defaults={t('content.username', { username })}
                            components={{ custom: <span style={{ textDecoration: 'underline' }} /> }}
                        />
                    </Typography>
                    <Typography variant="body2" align="center">
                        <Trans
                            defaults={t('content.email', { email })}
                            components={{ custom: <span style={{ textDecoration: 'underline' }} /> }}
                        />
                    </Typography>
                </Stack>
            }
            action={
                <Stack
                    direction='row'
                    sx={{ width: 1 }}
                    justifyContent='flex-end'>
                    <LinkButton
                        to='/login'
                        text={t('actions.signIn')}
                    />
                </Stack>
            }
        />
    )
}

export default CompleteCard;
