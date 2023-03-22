import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: 'adminApi',
    tagTypes: ['User', 'Products'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ['User']
        }),
        getproducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetproductsQuery
} = api;
