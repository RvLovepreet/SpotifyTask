import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getuser(state, action) {
      return (state = action.payload);
    },
    addFavSong(state, action) {
      return (state = action.payload);
    },
  },
});

export default userSlice.reducer;
export const { getuser, addFavSong } = userSlice.actions;
