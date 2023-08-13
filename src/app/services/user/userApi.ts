import { setUser, updateUserAvatar, updateUserProfile } from "../../redux/auth/authSlice";
import apiService from "../apiService";

export const userApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getMe: builder.query({
            query: (id) => ({
                url: `me/${id}`,
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
            query: ({ id, data }) => ({
                url: `me/${id}`,
                method: 'PUT',
                data,
            }),
            async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(updateUserProfile(data))
                } catch (error) {
                    console.error(error)
                }
            },
        }),
        updateAvatar: builder.mutation({
            query: ({ id, data }) => ({
                url: `me/${id}/avatar`,
                method: 'PUT',
                data,
            }),
            async onQueryStarted({ id, data }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(updateUserAvatar(data.data.avatar))
                } catch (error) {
                    console.error(error)
                }
            },
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