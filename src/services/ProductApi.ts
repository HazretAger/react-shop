import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProduct } from '../types/Product';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], string>({
            query: () => `products`,
        })
    })
});

export const { useGetAllProductsQuery } = productsApi;