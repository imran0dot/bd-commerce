import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "strapi-product",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products?populate=product_image'
        }),
        getProductsBySlug: builder.query({
            query: (id) => `products/${id}`
        })
    })
});

console.log(process.env.BACKEND_URI)

export const { useGetProductsQuery, useGetProductsBySlugQuery } = productsApi;

