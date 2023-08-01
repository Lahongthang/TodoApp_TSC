import axiosInstance from "./axiosInstance";

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }) =>
    async ({ url, method, data, params }: {
        url: string,
        method: string,
        data?: object,
        params?: object
    }, { getState }: { getState: any }) => {
        try {
            const token = getState().auth.token?.accessToken
            const result = await axiosInstance({
                baseURL: baseUrl,
                url,
                method,
                data,
                params,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': token,
                }
            })
            return {
                data: result.data
            }
        } catch (error: any) {
            return {
                error: {
                    status: error.response?.status,
                    data: error.response?.data || error.message,
                }
            }
        }
    }

export default axiosBaseQuery;
