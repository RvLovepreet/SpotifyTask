import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Track player
import TrackPlayer from 'react-native-track-player';
// Track player
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
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

// service.js
module.exports = async function () {
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section

  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
};
