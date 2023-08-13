import apiService from "../apiService";

export const todoApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getAllTodo: builder.query({
            query: () => ({
                url: 'todos',
                method: 'GET',
            }),
        }),
    })
})

export const {
    useGetAllTodoQuery,
} = todoApi
