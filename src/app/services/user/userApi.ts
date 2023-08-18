import { setUser, updateUserAvatar, updateUserProfile } from "../../redux/auth/authSlice";
import apiService from "../apiService";

export const userApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getMe: builder.query({
            query: () => ({
                url: 'me',
                method: 'GET',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setUser(data))
                } catch (error) {
                    console.error(error)
                }
            },
        }),
        updateProfile: builder.mutation({
            query: (data) => ({
                url: 'me',
                method: 'PUT',
                data,
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(updateUserProfile(data))
                } catch (error) {
                    console.error(error)
                }
            },
        }),
        updateAvatar: builder.mutation({
            query: (data) => ({
                url: 'me/avatar',
                method: 'PUT',
                data,
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(updateUserAvatar(data.data.avatar))
                } catch (error) {
                    console.error(error)
                }
            },
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: 'me/change-password',
                method: 'PUT',
                data
            })
        }),
        getAllUser: builder.query({
            query: () => ({
                url: 'users',
                method: 'GET'
            })
        })
    })
})

export const {
    useGetAllUserQuery,
} = userApi