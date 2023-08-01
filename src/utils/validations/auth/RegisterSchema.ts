import * as yup from 'yup'

export const RegisterSchema = (t: any) => yup.object().shape({
    username: yup.string().min(6, t('validations.username.min')).required(t('validations.username.required')),
    email: yup.string().email(t('validations.email.valid')).required(t('validations.email.required')),
    password: yup.string().min(8, t('validations.password.min')).required(t('validations.password.required')),
    confirmPassword: yup.string().oneOf([yup.ref('password')], t('validations.confirmPassword.match')).required(t('validations.confirmPassword.required'))
})
