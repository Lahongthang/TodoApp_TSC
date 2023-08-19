import { Trans, useTranslation } from "react-i18next"
import React from "react"
import { Button, Dialog, CircularProgress, Link, Stack, Typography, DialogContent, DialogActions, IconButton } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { useFormContext } from 'react-hook-form'
import { RHFTextField } from "./hook-form"
import Iconify from "./Iconify"

type ConfirmEmailCardProps = {
    open: boolean,
    formId: string,
    onSendMail: () => void,
    isSubmitting: boolean,
    isConfirming: boolean,
    onCloseConfirm: () => void,
}

const ConfirmEmailDialog: React.FC<ConfirmEmailCardProps> = ({ formId, open, isConfirming, isSubmitting, onSendMail, onCloseConfirm }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'EmailConfimation' })
    const { getValues } = useFormContext()
    const email = getValues().email

    return (
        <Dialog fullWidth maxWidth='xs' open={open}>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                sx={{ px: 1, pt: 1.5 }}
            >
                <Typography variant="h6">
                    {t('title')}
                </Typography>
                <IconButton
                    size="small"
                    sx={{ borderRadius: 2 }}
                    onClick={onCloseConfirm}>
                    <Iconify icon="eva:close-fill" />
                </IconButton>
            </Stack>
            <DialogContent>
                <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <Trans
                            defaults={t('desc', { email })}
                            components={{ custom: <span style={{ fontWeight: 'bold', color: '#000000DE' }} /> }}
                        />
                    </Typography>
                    <RHFTextField name='confirmCode' />
                    <Stack
                        spacing={2}
                        direction='row'
                        alignItems='center'
                        justifyContent='flex-start'>
                        <Link
                            type="button"
                            variant="body2"
                            component='button'
                            onClick={(e) => {
                                e.preventDefault()
                                onSendMail()
                            }}
                            sx={{
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline'}
                            }}
                        >
                            {t('sendCodeAgain')}
                        </Link>
                        {isConfirming && <CircularProgress sx={{
                            width: '15px !important', height: '15px !important',
                        }} />}
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button size="small" color="inherit" onClick={onCloseConfirm}>
                    {t('cancelBtn')}
                </Button>
                <LoadingButton
                    size="small"
                    type="submit"
                    form={formId}
                    variant="contained"
                    loading={isSubmitting}
                    loadingIndicator={t('confirmBtn.loadingIndicator')}>
                    {t('confirmBtn.content')}
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

const withConfirmEmail = (Component: React.ComponentType<any>) => {
    return ({
        t,
        formId,
        isConfirming,
        isSubmitting,
        showConfirm,
        onCloseConfirm,
        onSendMail
    } : {
        t: any,
        formId: string,
        isConfirming: boolean,
        isSubmitting: boolean,
        showConfirm: boolean,
        onCloseConfirm: () => void,
        onSendMail: () => void,
    }) => {
        return (
            <>
                <Component t={t} isHandling={isConfirming} />
                {showConfirm && <ConfirmEmailDialog
                    open={showConfirm}
                    formId={formId}
                    isConfirming={isConfirming}
                    isSubmitting={isSubmitting}
                    onSendMail={onSendMail}
                    onCloseConfirm={onCloseConfirm}
                />}
            </>
        )
    }
}

export default withConfirmEmail;
