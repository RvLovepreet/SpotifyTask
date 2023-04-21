import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  /*  baseUrl: 'https://18c4-122-160-165-213.ngrok-free.app', */
  /*   baseUrl: 'https://2ad7-122-160-165-213.ngrok-free.app', */
  /* baseUrl: 'https://c293-122-160-165-213.ngrok-free.app', */
  /*  baseUrl: 'https://ea0c-122-160-165-213.ngrok-free.app', */
});
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
