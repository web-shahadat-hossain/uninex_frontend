import { api } from "@/redux/api/apiSlice";

const userApi= api.injectEndpoints({

    endpoints: (build) => ({
        userCreate: build.mutation({
          query: (data: any) => ({
            url: "/users/create-user",
            method: "POST",
            body: data,
          }),
        }),
        userLogin: build.mutation({
          query: (data: any) => ({
            url: "/auth/login",
            method: "POST",
            body: data,
          }),
        }),
        verifyUser:build.query({
          query: () => `/auth/verify`,
          providesTags:[ "logout"]
        }),
        logoutUser: build.mutation({
          query: (data: any) => ({
            url: "/auth/logout",
            method: "POST",
            body: data,
          }),
          invalidatesTags:["logout"]
        }),



        findOneUser: build.query({
          query: (email) => `/users/${email}`,
          providesTags:["user"]
        }),

        allUserGet:build.query({
          query: () => `/users`,
          providesTags:["user"]
        }),
      
        deleteUser:build.mutation({
          query: (id: any) => ({
            url: `/users/${id}`,
            method: 'DELETE',  
           
          }),
          invalidatesTags:["user"]
        }),
        userProfileUpdate: build.mutation({
          query: ({id, data}:any) => ({
            url: `/users/${id}`,
            method: 'PATCH',  
            body:data
           
          }),
          invalidatesTags:["user"]
        }),
        makeAdmin: build.mutation({
          query: (id: any) => ({
            url: `/users/admin/${id}`,
            method: 'PATCH',  
          }),
          invalidatesTags:["user"]
        }),
      }),
})

export const {
    useUserCreateMutation,
    useUserLoginMutation,
    useVerifyUserQuery,
    useFindOneUserQuery,
   useLogoutUserMutation
    // useAllUserGetQuery,
    // useDeleteUserMutation,
    // useUserProfileUpdateMutation,
    // useMakeAdminMutation
}=userApi