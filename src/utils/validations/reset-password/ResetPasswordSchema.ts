import * as yup from 'yup'

export const ResetPasswordSchema = (t: any, activeStep: number) => yup.object().shape({
    email: yup.string().required(t('validations.email.required')).email(t('validations.email.valid')),
    verifyCode: activeStep === 1 ? yup.string().required(t('validations.verifyCode.required')).length(6, t('validations.verifyCode.valid')) : yup.string().nullable(),
    newPassword: activeStep === 2 ? yup.string().required(t('validations.newPassword.required')).min(8, t('validations.newPassword.min')) : yup.string().nullable(),
    confirmPassword: activeStep === 2 ? yup.string().required(t('validations.confirmPassword.required')).oneOf([yup.ref('newPassword')], t('validations.confirmPassword.match')) : yup.string().nullable(),
}).required()

