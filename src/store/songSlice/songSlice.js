import { createSlice } from '@reduxjs/toolkit';
const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    getSong(state, action) {
      return (state = action.payload);
    },
  },
});
export default songSlice.reducer;
export const { getSong } = songSlice.actions;
