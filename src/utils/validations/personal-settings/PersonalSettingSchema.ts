import * as yup from 'yup'

export const PersonalSettingSchema = (t: any) => yup.object().shape({
    username: yup.string().min(6, t('validations.username.min')).required(t('validations.username.required')),
    email: yup.string().email(t('validations.email.valid')).required(t('validations.email.required')),
    avatar: yup.string().nullable(),
    file: yup.mixed().nullable(),
})
