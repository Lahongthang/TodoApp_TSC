import React, { useState } from "react";
import { Stack, Chip, Typography, IconButton, Avatar, Popover, MenuItem, alpha } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSnackbar } from 'notistack'
import { formatDate } from "../../utils/datetime/formatHelper";
import { IssueItem, IssueType } from "../../utils/types/issue";
import { RestProps } from "../../utils/types";
import { FormatType } from "../../utils/constants/datetime/formatType";
import { useLocales, useToggle } from "../../hooks";
import CreateUpdateIssueDialog from "./dialog/CreateUpdateIssueDialog";
import ConfirmDialog from "../../components/ConfirmDialog";
import { dispatch } from "../../app/store";
import { issueApi } from "../../app/services/issue/issueApi";
import { IssueTypes } from "./utils";
import { useTranslation } from "react-i18next";
import MenuPopover from "../../components/MenuPopover";

type Props = {
    status: string,
    issue: IssueItem,
}

type IssueContentProps = Props & RestProps

const IssueContent: React.FC<IssueContentProps> = ({ issue, status, ...props }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { currentLang } = useLocales()
    const { enqueueSnackbar } = useSnackbar()

    const { id, title, assignee, endDate, type } = issue ?? {}

    const [openMenu, setOpenMenu] = useState<any>(null)
    const [editIssue, setEditIssue] = useState<any>(null)
    const { toggle: openConfirmDial, onOpen: onOpenConfirmDial, onClose: onCloseConfirmDial } = useToggle()

    const issueType = IssueTypes(t).find((item: IssueType) => item.id === type)

    const handleDeleteIssue = async () => {
        try {
            await dispatch(issueApi.endpoints.deleteIssue.initiate(id)).unwrap()
            enqueueSnackbar(t('notifications.deleteIssueSuccessed'))
        } catch (error) {
            enqueueSnackbar(t('notifications.deleteIssueFailed'), { variant: 'error' })
            console.error(error)
        }
    }

    return (
        <>
            <Stack spacing={1} {...props}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Chip size="small"
                        label={issueType?.label}
                        sx={{
                            borderRadius: 2,
                            p: 0,
                            height: 20,
                            bgcolor: theme => alpha(issueType?.color ?? theme.palette.grey[300], 0.6),
                        }}
                    />
                    <IconButton size="small" onClick={(e) => setOpenMenu(e.currentTarget)}>
                        <MoreVertIcon sx={{ width: 20, height: 20 }} />
                    </IconButton>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Typography variant="subtitle2">
                        {title}
                    </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Avatar
                            src={assignee?.avatar}
                            alt={assignee?.username}
                            sx={{ width: 20, height: 20, cursor: 'pointer' }}
                        />
                        <Typography variant="caption">{assignee.username}</Typography>
                    </Stack>
                    <Typography variant="caption">
                        {formatDate(new Date(endDate), FormatType.short, currentLang.value)}
                    </Typography>
                </Stack>
            </Stack>
            {openMenu && (
                <MenuPopover
                    open={openMenu}
                    onClose={() => setOpenMenu(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                    <MenuItem
                        sx={{
                            fontSize: '15px',
                            color: 'primary.main',
                        }}
                        onClick={() => {
                            setEditIssue(issue)
                            setOpenMenu(false)
                        }}
                    >
                        <EditIcon sx={{ pr: 1 }} />
                        Edit
                    </MenuItem>
                    <MenuItem
                        sx={{
                            fontSize: '15px',
                            color: 'error.main',
                        }}
                        onClick={() => {
                            onOpenConfirmDial()
                            setOpenMenu(false)
                        }}
                    >
                        <DeleteIcon sx={{ pr: 1 }} />
                        Delete
                    </MenuItem>
                </MenuPopover>
            )}
            {editIssue && (
                <CreateUpdateIssueDialog
                    status={status}
                    issueId={issue.id}
                    onClose={() => setEditIssue(null)}
                    open={Boolean(editIssue)}
                />
            )}
            {openConfirmDial && (
                <ConfirmDialog
                    open={openConfirmDial}
                    onClose={onCloseConfirmDial}
                    title={'Are you sure to delete this issue?'}
                    content={'This issue will be deleted'}
                    cancelText={'Cancel'}
                    confirmText={'Delete'}
                    onConfirm={handleDeleteIssue}
                />
            )}
        </>
    )
}

export default IssueContent;
