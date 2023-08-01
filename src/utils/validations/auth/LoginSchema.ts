import * as yup from 'yup'

export const LoginSchema = () => yup.object().shape({
    username: yup.string().min(6).required(),
    password: yup.string().min(8).required(),
}).required()
