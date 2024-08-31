import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const categoryApi = createApi({
    reducerPath: 'product-category',
    baseQuery: fetchBaseQuery({
        baseUrl: config.backendUrl
    }),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => 'categories'
        })
    })
});


export const { useGetCategoryQuery } = categoryApi;