import * as yup from 'yup'

export const LoginSchema = (t: any) => yup.object().shape({
    username: yup.string().required(t('validations.username.required')).min(6, t('validations.username.min')),
    password: yup.string().required(t('validations.password.required')).min(8, t('validations.password.min')),
}).required()
