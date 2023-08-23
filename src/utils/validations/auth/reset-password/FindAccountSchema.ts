import * as yup from 'yup'

export const FindAccountSchema = (t: any) => yup.object().shape({
    email: yup.string().email(t('validations.email.valid')).required(t('validations.email.required')),
})
