import { Trans } from 'react-i18next'
import React from "react";
import { Stack, Typography, Link } from '@mui/material'
import BaseCompleteCard from '../../../components/CompleteCard'
import { useNavigate } from "react-router-dom";
import Iconify from "../../../components/Iconify";

type CompleteCardProps = {
    t: any,
    data: any,
}

const CompleteCard: React.FC<CompleteCardProps> = ({ t, data }) => {
    const navigate = useNavigate()

    const { email, username } = data ?? {}

    return (
        <BaseCompleteCard
            sx={{ mt: 5 }}
            cardTitle={t('completeCard.cardTitle')}
            title={t('completeCard.title')}
            content={
                <Stack>
                    <Typography variant="body2" align="center">
                        <Trans
                            defaults={t('completeCard.content.username', { username })}
                            components={{ custom: <span style={{ textDecoration: 'underline' }} /> }}
                        />
                    </Typography>
                    <Typography variant="body2" align="center">
                        <Trans
                            defaults={t('completeCard.content.email', { email })}
                            components={{ custom: <span style={{ textDecoration: 'underline' }} /> }}
                        />
                    </Typography>
                </Stack>
            }
            action={
                <Stack direction='row' justifyContent='flex-end' spacing={2}>
                    <Link component='button' onClick={(e) => {
                        e.preventDefault()
                        navigate('/login')
                    }}>
                        <Iconify icon="material-symbols:login" sx={{ mr: 0.5 }} />
                        {t('completeCard.actions.signIn')}
                    </Link>
                </Stack>
            }
        />
    )
}

export default CompleteCard;
