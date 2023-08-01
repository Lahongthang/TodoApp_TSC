import { isFunction } from 'lodash'

const convertToUseFormFormat = (errors: any) => {
    return Object.keys(errors).reduce((result, currKey) => {
        const messObj = { message: errors[currKey] }
        return {...result, [currKey]: messObj}
    }, {})
}

export const showErrors = (errors: any, setError: any, keyConvert?: any, messageConvert?: any) => {
    const convertedErrors: any = convertToUseFormFormat(errors)
    Object.keys(convertedErrors).forEach(key => {
        const customKey = isFunction(keyConvert) ? keyConvert(key) : key
        const customMessage = isFunction(messageConvert) ? messageConvert(customKey) : convertedErrors[key]
        setError(customKey, customMessage)
    })
}
