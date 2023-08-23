import * as yup from 'yup'

export const VerifyEmailSchema = (t: any) => yup.object().shape({
    verifyCode: yup.string().required(t('validations.verifyCode')),
})
