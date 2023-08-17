import { Trans } from 'react-i18next'
import React from "react";
import { Card, CardHeader, Stack, Button, Link, Typography, CircularProgress, alpha } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useFormContext } from 'react-hook-form'
import { RHFTextField } from "../../../components/hook-form";

type ConfirmCardProps = {
    t: any,
    forForm: string,
    onSendMailAgain?: () => void,
    onCloseConfirm?: () => void,
    isHandling?: boolean,
}

const ConfirmCard: React.FC<ConfirmCardProps> = ({ t, forForm, isHandling, onCloseConfirm, onSendMailAgain }) => {
    const { getValues } = useFormContext()
    const email = getValues().email
    return (
        <Card sx={{
            mt: 3,
            px: 7,
            borderRadius: 0,
            backgroundColor: theme => alpha(theme.palette.primary.light, 0.03)
        }}>
            <CardHeader title={t('confirmCard.title')} />
            <Stack spacing={2}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <Trans
                        defaults={t('confirmCard.desc', { email })}
                        components={{ custom: <span style={{ fontWeight: 'bold', color: '#000000DE' }} /> }}
                    />
                </Typography>
                <RHFTextField name='confirmCode' />
                <Stack spacing={2} direction='row' alignItems='center' justifyContent='flex-start'>
                    <Link
                        component='button'
                        onClick={(e) => {
                            e.preventDefault()
                            onSendMailAgain?.()
                        }}
                        sx={{
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline'}
                        }}
                    >
                        {t('confirmCard.sendMailAgain')}
                    </Link>
                    {isHandling && <CircularProgress sx={{
                        width: '15px !important', height: '15px !important',
                    }} />}
                </Stack>
                <Stack direction='row' spacing={1} justifyContent='flex-end'>
                    <Button size="small" color="inherit" onClick={onCloseConfirm}>
                        {t('confirmCard.updateInfoBtn')}
                    </Button>
                    <LoadingButton
                        size="small"
                        variant="contained"
                        type="submit"
                        form={forForm}
                        loading={isHandling}
                        loadingIndicator={t('confirmCard.confirmBtn.loadingIndicator')}>
                        {t('confirmCard.confirmBtn.content')}
                    </LoadingButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ConfirmCard;
