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
        confirmRegister: builder.mutation({
            query: (data) => ({
                url: 'confirm-register',
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
        confirmResetPassword: builder.mutation({
            query: (data) => ({
                url: 'confirm-reset-password',
                method: 'POST',
                data,
            }),
        }),
        verifyResetPasswordCode: builder.mutation({
            query: (data) => ({
                url: 'verify-reset-password-code',
                method: 'POST',
                data
            }),
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: 'reset-password',
                method: 'PUT',
                data,
            }),
        })
    })
})
