export type IssueItem = {
    id: number,
    title: string,
    description: string,
    type: number,
    status: number,
    createdAt: string,
    createdBy: User,
    updatedAt: string,
    updatedBy: User,
    assignee: User,
    priority: number,
    startDate: string,
    endDate: string,
}

export type User = {
    id: number,
    username: string,
    avatar: string,
}


export type IssueStatus = {
    id: number,
    name: string,
    label: string,
    color: string,
}

export type IssueType = {
    id: number,
    name: string,
    label: string,
    color: string,
}

export type IssuePriority = {
    id: number,
    name: string,
    label: string,
    color: string,
}
