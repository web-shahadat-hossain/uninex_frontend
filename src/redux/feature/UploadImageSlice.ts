import { api } from "../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadImage: build.mutation({
      query: (data) => ({
        url: "/upload/images-upload",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = productApi;
