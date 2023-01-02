import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: {
          username: credentials.user,
          password: credentials.pwd,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
