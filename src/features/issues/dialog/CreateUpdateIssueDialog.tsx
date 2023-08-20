import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Button, Stack, IconButton, Dialog, DialogActions, DialogContent, Typography } from "@mui/material";
import { RestProps } from "../../../utils/types";
import IssueFormContainer from "./IssueFormContainer";
import Iconify from "../../../components/Iconify";

type Props = {
    open: boolean,
    issueId?: number,
    status: string,
    onClose: () => void,
}

type CreateUpdateIssueDialogProps = Props & RestProps

const FORM_ID = 'issue-form'

const CreateUpdateIssueDialog: React.FC<CreateUpdateIssueDialogProps> = ({ open, status, issueId, onClose, ...props }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues.CreateUpdateIssueDialog' })

    const [isHandling, setIsHandling] = useState<boolean>(false)

    const isEditMode = !!issueId

    return (
        <Dialog fullWidth maxWidth='sm' open={open} {...props}>
            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: 1.5, pt: 1 }}>
                <Typography variant="h6">
                    {t(`title.${isEditMode ? 'update' : 'add'}`)}
                </Typography>
                <IconButton size="small" sx={{ borderRadius: 2 }} onClick={onClose}>
                    <Iconify icon="eva:close-fill" />
                </IconButton>
            </Stack>
            <DialogContent>
                <IssueFormContainer
                    id={FORM_ID}
                    issueId={issueId}
                    status={status}
                    onSubmitting={() => setIsHandling(true)}
                    onSubmitError={() => setIsHandling(false)}
                    onSubmitted={() => {
                        setIsHandling(false)
                        onClose()
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button size="small" color="inherit" onClick={onClose}>
                    {t('form.cancelBtn')}
                </Button>
                <LoadingButton
                    size="small"
                    variant="contained"
                    type="submit"
                    form={FORM_ID}
                    loading={isHandling}
                    loadingIndicator={t(`form.${isEditMode ? 'updateBtn' : 'addBtn'}.loadingIndicator`)}
                >
                    {t(`form.${isEditMode ? 'updateBtn' : 'addBtn'}.content`)}
                </LoadingButton>
            </DialogActions> 
        </Dialog>
    )
}

export default CreateUpdateIssueDialog;
