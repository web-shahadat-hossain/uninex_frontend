import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllOrder: build.query({
      query: () => `/order`,
      providesTags: ["buy_order"],
    }),

    buyNowOrder: build.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["buy_order"],
    }),

    // 🟢 Update order status (with dynamic status)
    buyNowOrderStatusUpdate: build.mutation({
      query: ({ id, status }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["buy_order"],
    }),

    // 🗑️ Delete order
    buyNowOrderStatusDelete: build.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["buy_order"],
    }),
  }),
});

export const {
  useBuyNowOrderMutation,
  useGetAllOrderQuery,
  useBuyNowOrderStatusDeleteMutation,
  useBuyNowOrderStatusUpdateMutation,
} = orderApi;
