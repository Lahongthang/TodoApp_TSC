import { useTranslation } from "react-i18next";
import React from "react";
import { Divider, Stack, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { RHFAutoComplete, RHFDatePicker, RHFTextField } from "../../../components/hook-form";
import { RestProps } from "../../../utils/types";
import { useAuth } from "../../../hooks";
import { SelectUserTextField } from "../../../components/customs/autocomplete";
import withAction from "../../../components/withAction";
import SelectIssueStatusTextField from "../../../components/customs/autocomplete/SelectIssueStatusTextField";
import { IssuePriorities, IssueStatues, IssueTypes } from "../utils";

type Props = {
    issueId?: number,
    users: any,
}

type IssueFormProps = Props & RestProps

const AssigneeTextField = withAction(SelectUserTextField, { icon: 'bi:person-fill' })

const IssueForm: React.FC<IssueFormProps> = ({ issueId, users, ...props }) => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    
    const { setValue, clearErrors, watch } = useFormContext()
    
    const { auth } = useAuth()

    return (
        <Stack spacing={2} sx={{ pt: 1 }} {...props}>
            <RHFTextField
                rows={2}
                multiline
                name='title'
                label={t('CreateUpdateIssueDialog.form.title')}
            />
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack direction='row' spacing={2}>
                <RHFAutoComplete
                    name='type'
                    label={t('CreateUpdateIssueDialog.form.type')}
                    options={IssueTypes(t)}
                />
                <SelectIssueStatusTextField
                    name='status'
                    label={t('CreateUpdateIssueDialog.form.status')}
                    options={IssueStatues(t)}
                    readOnly={!issueId}
                    disabled={!issueId}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <RHFAutoComplete
                    name='priority'
                    label={t('CreateUpdateIssueDialog.form.priority')}
                    options={IssuePriorities(t)}
                    sx={{ width: '50%' }}
                />
                <AssigneeTextField
                    name='assignee'
                    label={t('CreateUpdateIssueDialog.form.assignee')}
                    actionTitle={t('CreateUpdateIssueDialog.form.assignToMySelf')}
                    options={users}
                    sx={{ width: '50%' }}
                    onActionSubmit={() => {
                        setValue('assignee', {...auth.user, label: auth.user?.username})
                        clearErrors('assignee')
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <RHFDatePicker name="startDate" label={t('CreateUpdateIssueDialog.form.startDate')} />
                <RHFDatePicker name="endDate" minDate={watch('startDate')} label={t('CreateUpdateIssueDialog.form.endDate')} />
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack spacing={1}>
                <Typography variant="caption">
                    {t('CreateUpdateIssueDialog.form.descDescription')}
                </Typography>
                <RHFTextField multiline rows={3} name='description' label={t('CreateUpdateIssueDialog.form.description')} />
            </Stack>
        </Stack>
    )
}

export default IssueForm;
