import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { RestProps } from "../../../utils/types";
import IssueFormContainer from "./IssueFormContainer";

type Props = {
    open: boolean,
    issueId?: number,
    status: string,
    onClose: () => void,
}

type CreateUpdateIssueDialogProps = Props & RestProps

const CreateUpdateIssueDialog: React.FC<CreateUpdateIssueDialogProps> = ({ open, status, issueId, onClose, ...props }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const FORM_ID = 'issue-form'

    const [isHandling, setIsHandling] = useState<boolean>(false)

    return (
        <Dialog fullWidth maxWidth='sm' open={open} onClose={onClose} {...props}>
            <DialogTitle>Add new issue</DialogTitle>
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
                    Cancel
                </Button>
                <LoadingButton
                    size="small"
                    variant="contained"
                    type="submit"
                    form={FORM_ID}
                    loading={isHandling}
                    loadingIndicator={'Adding...'}
                >
                    {issueId ? 'Update' : 'Add'}
                </LoadingButton>
            </DialogActions> 
        </Dialog>
    )
}

export default CreateUpdateIssueDialog;
