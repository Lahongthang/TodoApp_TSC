import { ColorItem } from "../../../utils/types/color";
import apiService from "../apiService";

export const colorApi = apiService.injectEndpoints({
    endpoints: builder => ({
        getAllColor: builder.query({
            query: () => ({
                url: 'colors',
                method: 'GET',
            }),
        }),
        addColor: builder.mutation({
            query: (data) => ({
                url: 'colors/create',
                method: 'POST',
                data,
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                const { data: newColor } = await queryFulfilled
                dispatch(colorApi.util.updateQueryData('getAllColor', {}, (colors) => {
                    colors.push(newColor)
                }))
            },
        }),
        updateColor: builder.mutation({
            query: ({id, data}) => ({
                url: `colors/${id}`,
                method: 'PUT',
                data,
            }),
            async onQueryStarted({id , data}, { dispatch, queryFulfilled }) {
                await queryFulfilled
                dispatch(colorApi.util.updateQueryData('getAllColor', {}, (colors) => {
                    return colors.map((color: ColorItem) => {
                        if (color._id !== id) return color
                        return {...color, name: data.name}
                    })
                }))
            },
        }),
        deleteColor: builder.mutation({
            query: (id) => ({
                url: `colors/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                await queryFulfilled
                dispatch(colorApi.util.updateQueryData('getAllColor', {}, (colors) => {
                    return colors.filter((color: ColorItem) => color._id !== id)
                }))
            },
        }),
    })
})

export const {
    useGetAllColorQuery,
} = colorApi;
