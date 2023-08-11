import { useTranslation } from "react-i18next";
import React, { useEffect, useMemo } from "react";
import { useForm } from 'react-hook-form'
import { useSnackbar } from "notistack";
import { FormProvider } from "../../../components/hook-form";
import IssueForm from "./IssueForm";
import { issueApi, useGetIssueByIdQuery } from "../../../app/services/issue/issueApi";
import { IssuePriority, IssueStatus, IssueType } from "../../../utils/types/issue";
import { IssuePriorities, IssueStatues, IssueTypes } from "../utils";
import { useGetAllUserQuery } from "../../../app/services/user/userApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { IssueSchema } from "../../../utils/validations/issue/IssueSchema";
import { useAuth } from "../../../hooks";
import { dispatch } from "../../../app/store";
import { formatDate } from "../../../utils/requestHelper";

type IssueFormContainerProps = {
    id: string,
    issueId?: number,
    status: string,
    onSubmitting?: () => void,
    onSubmitted?: () => void,
    onSubmitError?: () => void,
}

const IssueFormContainer: React.FC<IssueFormContainerProps> = ({
    id, issueId, status,
    onSubmitting, onSubmitted, onSubmitError,
}) => {
    const { t } = useTranslation('translations', { keyPrefix: 'issues' })
    const { enqueueSnackbar } = useSnackbar()
    const { auth } = useAuth()

    const { data: issue } = useGetIssueByIdQuery(issueId, { skip: !issueId })
    const { data: users } = useGetAllUserQuery({})

    const convertedUsers = useMemo(() => {
        return users?.map((user: any) => ({ ...user, label: user.username})) ?? []
    }, [users])

    const assignee = useMemo(() => {
        return convertedUsers?.find((user: any) => user.id === issue?.assignee?.id) ?? null
    }, [convertedUsers, issue])

    const issueType = useMemo(() => {
        return IssueTypes(t)?.find((type: IssueType) => type.id === issue?.type) ?? null
    }, [issue])

    const issueStatus = useMemo(() => {
        return IssueStatues(t)?.find((s: IssueStatus) => s.name === status) ?? null
    }, [issue])

    const issuePriority = useMemo(() => {
        return IssuePriorities(t)?.find((priority: IssuePriority) => priority.id === issue?.priority) ?? null
    }, [issue])

    const defaultValues = useMemo(() => ({
        title: issue?.title ?? '',
        description: issue?.description ?? '',
        type: issueType,
        status: issueStatus,
        assignee: assignee,
        priority: issuePriority,
        startDate: issue?.startDate ?? null,
        endDate: issue?.endDate ?? null,
    }), [issue, issueType, issueStatus, assignee, issuePriority])

    const methods = useForm({
        defaultValues,
        mode: 'onSubmit',
        resolver: yupResolver(IssueSchema(t)),
    })

    const { handleSubmit, reset } = methods

    const handleFormSubmit = async (data: any) => {
        onSubmitting?.()
        const { title, description, type, status, priority, assignee, startDate, endDate } = data
        const bodyData = {
            title,
            description,
            type: type.id,
            status: status.id,
            priority: priority.id,
            assignee: assignee.id,
            startDate: formatDate(new Date(startDate)),
            endDate: formatDate(new Date(endDate)),
        }
        if (issueId) Object.assign(bodyData, { updatedBy: auth.user?.id })
        else Object.assign(bodyData, { createdBy: auth.user?.id })
        try {
            if (issueId) await dispatch(issueApi.endpoints.updateIssue.initiate({ id: issueId, data: bodyData })).unwrap()
            else await dispatch(issueApi.endpoints.createIssue.initiate(bodyData)).unwrap()
            enqueueSnackbar(t(`notifications.${issueId ? 'updateIssueSuccessed' : 'createIssueSuccessed'}`))
            onSubmitted?.()
        } catch (error) {
            enqueueSnackbar(t(`notifications.${issueId ? 'updateIssueFailed' : 'createIssueFailed'}`), { variant: 'error' })
            onSubmitError?.()
            console.error(error)
        }
    }

    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues])

    return (
        <FormProvider id={id} methods={methods} onSubmit={handleSubmit(handleFormSubmit)}>
            <IssueForm
                t={t}
                issueId={issueId}
                users={convertedUsers}
            />
        </FormProvider>
    )
}

export default IssueFormContainer;
