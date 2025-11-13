import { api } from "../../api/apiSlice";

const productApi= api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
          query: (category) => `/product?category=${category}`,
          providesTags:["product"]
        }),
      

        productDetails: build.query({
          query: (slug) => `/product/single/${slug}`,
          providesTags:["product"]
        }),
    
        productPost: build.mutation({
          query: (data) => ({
            url: "/product/create-product",
            method: "POST",
            body: data,
          }),
          invalidatesTags:["product"]
        }),
      }),
})

export const {useGetProductsQuery, useProductDetailsQuery, useProductPostMutation}=productApi


