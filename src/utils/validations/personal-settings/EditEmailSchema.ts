import * as yup from 'yup'

export const EditEmailSchema = (t: any, needConfirmCode: boolean) => yup.object().shape({
    oldEmail: yup.string().email(t('validations.oldEmail.valid')).required(t('validations.oldEmail.required')),
    newEmail: yup.string().email(t('validations.newEmail.valid')).required(t('validations.newEmail.required')),
    confirmCode: needConfirmCode ? yup.string().required(t('validations.confirmCode.required')) : yup.string().nullable(),
})
