import { signIn } from "../../redux/auth/authSlice";
import apiService from "../apiService";
import { userApi } from "../user/userApi";

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
                    await dispatch(userApi.endpoints.getMe.initiate(user._id, { forceRefetch: true })).unwrap()
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
