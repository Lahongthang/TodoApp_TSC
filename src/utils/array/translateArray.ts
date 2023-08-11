import { isEmpty } from "lodash"

export const translateArray = (array: any = [], transFunc: (item: any) => void) => {
    if (isEmpty(array)) return
    return array.map((item: any) => transFunc(item))
}
