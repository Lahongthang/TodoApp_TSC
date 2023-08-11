import apiService from "../apiService";

export const issueTypeApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getAllIssueType: builder.query({
            query: () => ({
                url: 'issueTypes',
                method: 'GET',
            })
        })
    })
})

export const {
    useGetAllIssueTypeQuery,
} = issueTypeApi;
