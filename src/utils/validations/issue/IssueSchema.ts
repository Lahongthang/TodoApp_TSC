import * as yup from 'yup'

export const IssueSchema = (t: any) => yup.object().shape({
    title: yup.string().required(),
    type: yup.mixed(),
    status: yup.mixed(),
    priority: yup.mixed(),
    assignee: yup.mixed(),
    description: yup.string().nullable(),
    startDate: yup.date().required(),
    endDate: yup.date().required(),
})
