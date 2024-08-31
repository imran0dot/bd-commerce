import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';

export const productsApi = createApi({
    reducerPath: "strapi-product",
    baseQuery: fetchBaseQuery({
        baseUrl: config.backendUrl
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products?populate=product_image'
        }),
        getProductsBySlug: builder.query({
            query: (id) => `products/${id}`
        }),
        getProductsByCategory: builder.query({
            query: ({category}) => {
                let url = '';
                if(category){
                    console.log('hi im category')
                    url = `products?populate=*&filters[categories][category][$eq]=${category}`
                    // url =  'products?populate=product_image'
                }else{
                    url =  'products?populate=product_image'
                };
                return url
            }
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductsBySlugQuery,
    useGetProductsByCategoryQuery
} = productsApi;

