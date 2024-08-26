import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const username = 'ck_2e42ce35f8a88be16a1613d6d016d6523d8d9558';
const password = 'cs_7d7936a2da1b765dbb267625cb15d8a40e0010e3';

const credentials = btoa(`${username}:${password}`);

// Define the API
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://suisota.com/wp-json/wc/v3',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${credentials}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useFetchProductsQuery } = productsApi;
