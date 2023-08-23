import * as yup from 'yup'

export const ResetPasswordSchema = (t: any, needConfirmCode: boolean, needNewPassword: boolean) => yup.object().shape({
    email: yup.string().email(t('validations.email.valid')).required(t('validations.email.required')),
    confirmCode: needConfirmCode ? yup.string().required(t('validations.confirmCode.required')) : yup.string().nullable(),
    newPassword: needNewPassword ? yup.string().required(t('validations.newPassword.required')) : yup.string().nullable(),
    confirmPassword: needNewPassword ? yup.string().oneOf([yup.ref('newPassword')], t('validations.confirmPassword.match')).required(t('validations.confirmPassword.required')) : yup.string().nullable(),
})
