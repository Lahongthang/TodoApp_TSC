import { IssueItem, IssueStatus } from "../../utils/types/issue";

export const IssueStatues = (t: any) => [
    {
        id: 1,
        name: 'open',
        label: t('issueStatuses.open'),
        color: '#ED8077',
    },
    {
        id: 2,
        name: 'inprogress',
        label: t('issueStatuses.inprogress'),
        color: '#4488C5',
    },
    {
        id: 3,
        name: 'resolved',
        label: t('issueStatuses.resolved'),
        color: '#5EB5A6',
    },
    {
        id: 4,
        name: 'closed',
        label: t('issueStatuses.closed'),
        color: '#A1AF2F',
    },
]

export const IssuePriorities = (t: any) => [
    {
        id: 1,
        name: 'low',
        label: t('issuePriorities.low'),
        color: '#5EB5A6',
    },
    {
        id: 2,
        name: 'medium',
        label: t('issuePriorities.medium'),
        color: '#4488C5',
    },
    {
        id: 3,
        name: 'high',
        label: t('issuePriorities.high'),
        color: '#F42858',
    },
]

export const IssueTypes = (t: any) => [
    {
        id: 1,
        name: 'task',
        label: t('issueTypes.task'),
        color: '#ED8077',
    },
    {
        id: 2,
        name: 'bug',
        label: t('issueTypes.bug'),
        color: '#A1AF2F',
    },
    {
        id: 3,
        name: 'request',
        label: t('issueTypes.request'),
        color: '#4488C5',
    },
    {
        id: 4,
        name: 'other',
        label: t('issueTypes.other'),
        color: '#5EB5A6',
    },
]

export const groupIssueByStatus = (issues: IssueItem[] = [], issueStatuses: IssueStatus[]) => {
    let result: any = {}
    issueStatuses?.forEach((status: IssueStatus) => {
        const foundIssues = issues?.filter((issue: IssueItem) => issue.status === status.id) ?? []
        result[status.name] = {
            id: status.name,
            label: status.label,
            issues: foundIssues,
        }
    })
    return result
}
