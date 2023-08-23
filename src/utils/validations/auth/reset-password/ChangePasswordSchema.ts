import * as yup from 'yup'

export const ChangePasswordSchema = (t: any) => yup.object().shape({
    newPassword: yup.string().min(8, t('validations.newPassword.min')).required(t('validations.newPassword.required')),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], t('validations.confirmPassword.match')).required(t('validations.confirmPassword.required')),
})
