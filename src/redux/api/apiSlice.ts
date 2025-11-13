import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getAuthToken = () => {
  return localStorage.getItem("secretToken"); // Replace with your actual token retrieval logic
};
export const api = createApi({
  reducerPath: "api",
  tagTypes: ["buy_order", "user", "product", "cart_order", "logout"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.uninex.shop/api/v1",
    credentials: "omit",
    prepareHeaders: (headers) => {
      const authToken = getAuthToken();
      if (authToken) {
        headers.set("authorization", `${authToken}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
