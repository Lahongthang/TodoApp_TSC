import * as yup from 'yup'

export const RegisterSchema = (t: any, activeStep: number) => yup.object().shape({
    username: yup.string().required(t('validations.username.required')).min(6, t('validations.username.min')),
    email: yup.string().required(t('validations.email.required')).email(t('validations.email.valid')),
    password: yup.string().required(t('validations.password.required')).min(8, t('validations.password.min')),
    confirmPassword: yup.string().required(t('validations.confirmPassword.required')).oneOf([yup.ref('password')], t('validations.confirmPassword.match')),
    verifyCode: activeStep === 1 ? yup.string().required(t('validations.verifyCode.required')).length(6, t('validations.verifyCode.valid')) : yup.string().nullable(),
})
