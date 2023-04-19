import { api } from '../../api';
export const userApi = api.injectEndpoints({
  endpoints: build => ({
    signIn: build.mutation({
      query: ({ phone_number, password }) => ({
        url: 'signin/',
        method: 'POST',
        body: { phone_number, password },
      }),
    }),
    signUp: build.mutation({
      /*   query: id => `/users/${id}`, */
      query: ({ phone_number, name, password, detail }) => ({
        url: 'signup/',
        method: 'POST',
        body: { phone_number, name, password, detail },
      }),
    }),
  }),
  /*   overrideExisting: false, */
});
export const { useSignUpMutation, useSignInMutation } = userApi;
