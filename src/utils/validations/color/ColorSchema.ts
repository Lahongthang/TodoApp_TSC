import * as yup from 'yup'

export const ColorSchema = () => yup.object().shape({
    name: yup.string().required('Name is required field'),
}).required()
