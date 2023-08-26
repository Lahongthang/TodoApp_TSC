import { matchPath } from "react-router-dom"

export const getActive = (path: string, pathName: string) => {
    return path ? !!matchPath({ path, end: false }, pathName) : false
}
