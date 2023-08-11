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
    t: any,
    issueId?: number,
    users: any,
}

type IssueFormProps = Props & RestProps

const AssigneeTextField = withAction(SelectUserTextField, { icon: 'bi:person-fill', actionTitle: 'Assign to myself' })

const IssueForm: React.FC<IssueFormProps> = ({ t, issueId, users, ...props }) => {
    const { setValue, clearErrors, watch } = useFormContext()
    const { auth } = useAuth()

    return (
        <Stack spacing={2} sx={{ pt: 1 }} {...props}>
            <RHFTextField multiline rows={2} name='title' label='Title' />
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack direction='row' spacing={2}>
                <RHFAutoComplete
                    name='type'
                    label="Type"
                    options={IssueTypes(t)}
                />
                <SelectIssueStatusTextField
                    name='status'
                    label="Status"
                    options={IssueStatues(t)}
                    readOnly={!issueId}
                    disabled={!issueId}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <RHFAutoComplete
                    name='priority'
                    label="Priority"
                    options={IssuePriorities(t)}
                    sx={{ width: '50%' }}
                />
                <AssigneeTextField
                    name='assignee'
                    label="Assignee"
                    options={users}
                    sx={{ width: '50%' }}
                    onActionSubmit={() => {
                        setValue('assignee', {...auth.user, label: auth.user?.username})
                        clearErrors('assignee')
                    }}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <RHFDatePicker name="startDate" />
                <RHFDatePicker name="endDate" minDate={watch('startDate')} />
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack spacing={1}>
                <Typography variant="caption">
                    Please enter description in the comments
                </Typography>
                <RHFTextField multiline rows={3} name='description' label='Description' />
            </Stack>
        </Stack>
    )
}

export default IssueForm;
