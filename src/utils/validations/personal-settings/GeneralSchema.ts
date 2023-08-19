import * as yup from 'yup'

export const GeneralSchema = (t: any) => yup.object().shape({
    username: yup.string().min(6, t('validations.username.min')).required(t('validations.username.required')),
    avatar: yup.string().nullable(),
    file: yup.mixed().nullable(),
    phone: yup.string().nullable(),
    address: yup.string().nullable(),
    about: yup.string().nullable(),
})
