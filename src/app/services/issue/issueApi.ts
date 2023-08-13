import { isEmpty } from "lodash";
import { IssueItem } from "../../../utils/types/issue";
import apiService from "../apiService";

export const issueApi = apiService
    .enhanceEndpoints({ addTagTypes: ['Issues'] })
    .injectEndpoints({
        endpoints: builder => ({
            getAllIssue: builder.query({
                query: () => ({
                    url: 'issues',
                    method: 'GET',
                }),
                providesTags: (result, error, arg) =>
                    !isEmpty(result)
                        ? [...result.map(({ id }: { id: number }) => ({ type: 'Issues' as const, id }))]
                        : ['Issues']
            }),
            searchIssue: builder.query({
                query: (params) => ({
                    url: 'issues/search',
                    method: 'GET',
                    params,
                }),
                providesTags: (result, error, arg) =>
                    !isEmpty(result)
                        ? [...result.map(({ id }: { id: number }) => ({ type: 'Issues' as const, id }))]
                        : ['Issues']
            }),
            getIssueById: builder.query({
                query: (id) => ({
                    url: `issues/${id}`,
                    method: 'GET',
                }),
                providesTags: (result, error, arg) => [{ type: 'Issues' as const, id: arg }],
            }),
            createIssue: builder.mutation({
                query: (data) => ({
                    url: 'issues/create',
                    method: 'POST',
                    data,
                }),
                invalidatesTags: ['Issues'],
            }),
            updateStatus: builder.mutation({
                query: ({ id, data }) => ({
                    url: `issues/${id}/status`,
                    method: 'PUT',
                    data,
                }),
                invalidatesTags: (result, error, arg) => [{ type: 'Issues' as const, id: arg.id }],
            }),
            updateIssue: builder.mutation({
                query: ({ id, data }) => ({
                    url: `issues/${id}`,
                    method: 'PUT',
                    data,
                }),
                invalidatesTags: (result, error, arg) => [{ type: 'Issues' as const, id: arg.id }, 'Issues'],
            }),
            deleteIssue: builder.mutation({
                query: (id) => ({
                    url: `issues/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Issues'],
            })
        })
})

export const {
    useGetAllIssueQuery,
    useGetIssueByIdQuery,
    useSearchIssueQuery,
} = issueApi;
