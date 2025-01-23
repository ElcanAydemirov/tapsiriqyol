import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const endpoints = {
    products:"products"
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts : builder.query({
      query: () => `${endpoints.products}`,
      providesTags:['Products']
    }),
    getProductsById : builder.query({
        query: (id) => `${endpoints.products}/${id}`,
    }),
    deleteById : builder.mutation({
        query: ( id ) => ({
          
            url: `${endpoints.products}/${id}`,
            method: 'DELETE',   
            
          }),
          invalidatesTags:['Products']
        
    }),

    editById : builder.mutation({
      query: ( {id,...body} ) => ({
        
          url: `${endpoints.products}/${id}`,
          method: 'PUT', 
          body  
          
        }),
        invalidatesTags:['Products']
      
  }),

    post : builder.mutation({
        query: ({ ...body }) => ({
            url: `${endpoints.products}`,
            method: 'POST',   
            body
          }),
        
    }),
    
  }),
})

export const { useDeleteByIdMutation,useGetProductsByIdQuery,useGetProductsQuery,usePostMutation,useEditByIdMutation } = productsApi