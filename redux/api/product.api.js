import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// Create the axiosBaseQuery function
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        auth: {
          username: process.env.CONSUMER_KEY || '',
          password: process.env.CONSUMER_SECRET || '',
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status || 500,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

// Create the RTK Query API slice using the axiosBaseQuery function
export const woocommerceApi = createApi({
  reducerPath: 'woocommerceApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://suisota.com/wp-json/wc/v3/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getProducts` query endpoint
export const { useGetProductsQuery } = woocommerceApi;
