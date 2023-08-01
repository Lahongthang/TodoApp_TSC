export const transformToCapitalize = (word: string) => {
    if (!word) return
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
}

export const transformToCamelCase = (text: string) => {
    if (!text) return
    return text.split(' ').reduce((result, curr) => `${result} ${transformToCapitalize(curr)}`, '')
}

export const transformToLowerCase = (text: string) => {
    if (!text) return
    return text.toLocaleLowerCase()
}
