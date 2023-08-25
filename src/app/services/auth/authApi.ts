import { signIn, signOut } from "../../redux/auth/authSlice";
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
                    await dispatch(userApi.endpoints.getMe.initiate({}, { forceRefetch: true })).unwrap()
                } catch (error) {
                    console.error(error)
                }
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(signOut({}))
                } catch (error) {
                    console.error(error)
                }
            },
        }),
        verifyAccount: builder.mutation({
            query: (data) => ({
                url: 'verify-account',
                method: 'POST',
                data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'register',
                method: 'POST',
                data,
            }),
        }),
    })
})
