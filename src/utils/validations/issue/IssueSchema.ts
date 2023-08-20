import * as yup from 'yup'

export const IssueSchema = (t: any) => yup.object().shape({
    title: yup.string().required(t('validations.title')),
    type: yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        label: yup.string().required(),
        color: yup.string().required(),
    }).nullable().test('type', t('validations.type'), (value) => !!value),
    status: yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        label: yup.string().required(),
        color: yup.string().required(),
    }).nullable().test('status', t('validations.status'), (value) => !!value),
    priority: yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        label: yup.string().required(),
        color: yup.string().required(),
    }).nullable().test('priority', t('validations.priority'), (value) => !!value),
    assignee: yup.object().shape({
        id: yup.number().required(),
        username: yup.string().required(),
        label: yup.string().required(),
        avatar: yup.string().required(),
    }).nullable().test('assignee', t('validations.assignee'), (value) => !!value),
    description: yup.string().nullable(),
    startDate: yup.date().required(t('validations.startDate')),
    endDate: yup.date().required(t('validations.endDate')),
})
