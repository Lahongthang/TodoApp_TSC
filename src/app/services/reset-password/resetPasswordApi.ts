import apiService from "../apiService";

export const resetPasswordApi = apiService.injectEndpoints({
    endpoints: builder => ({
        sendVerificationCode: builder.mutation({
            query: (data) => ({
                url: 'reset-password/send-verification-code',
                method: 'POST',
                data,
            }),
        }),
        checkVerificationCode: builder.mutation({
            query: (data) => ({
                url: 'reset-password/check-verification-code',
                method: 'POST',
                data,
            }),
        }),
        changeNewPassword: builder.mutation({
            query: (data) => {
                console.log('DATA: ', data)
                return ({
                    url: 'reset-password/change-password',
                    method: 'PUT',
                    data,
                })
            },
        }),
    })
})
