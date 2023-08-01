import * as yup from 'yup'

export const LoginSchema = (t: any) => yup.object().shape({
    username: yup.string().min(6, t('validations.username.min')).required(t('validations.username.required')),
    password: yup.string().min(8, t('validations.password.min')).required(t('validations.password.required')),
}).required()
