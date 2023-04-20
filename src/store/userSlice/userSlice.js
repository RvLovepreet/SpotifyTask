import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getuser(state, action) {
      console.log(action.payload, 'I am in getuser Fucntion');
      return (state = action.payload);
    },
    removeuser(state, action) {
      return (state = action.payload);
    },
    addFavSong(state, action) {
      return (state = action.payload);
    },
  },
});

export default userSlice.reducer;
export const { getuser, removeuser, addFavSong } = userSlice.actions;
