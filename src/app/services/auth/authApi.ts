import { setUser, signIn } from "../../redux/auth/authSlice";
import apiService from "../apiService";

export const authApi = apiService.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                data,
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    const { data: resData } = await queryFulfilled
                    const { token, user } = resData
                    dispatch(signIn(token))
                    const { _id, username, email } = user
                    dispatch(setUser({ _id, username, email }))
                } catch (error) {
                    console.error(error)
                }
            }
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'register',
                method: 'POST',
                data,
            })
        }),
    })
})
