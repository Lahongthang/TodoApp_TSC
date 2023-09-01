import * as yup from 'yup'

export const SecuritySchema = (t: any) => yup.object().shape({
    oldPassword: yup.string().required(t('validations.oldPassword.required')),
    newPassword: yup.string().required(t('validations.newPassword.required')).min(8, t('validations.newPassword.min')),
    confirmPassword: yup.string().required(t('validations.confirmPassword.required')).oneOf([yup.ref('newPassword')], t('validations.confirmPassword.match')),
})
