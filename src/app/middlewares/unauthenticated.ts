import { isRejectedWithValue } from "@reduxjs/toolkit"
import { signOut } from "../redux/auth/authSlice"

export const unauthenticated = ({ dispatch }: { dispatch: any }) => (next: any) => (action: any) => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {
        dispatch(signOut({}))
        return
    }
    return next(action)
}
