import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'key',
  initialState: {},
  reducers: {
    addKey: (state, action) => {
      return (state = action.payload);
    },
    removeKey: (state, action) => {
      return (state = action.payload);
    },
    /*  getuser(state, action) {
      return (state = action.payload);
    },
    addFavSong(state, action) {
      return (state = action.payload);
    }, */
    /*  changeTheme: (state, { payload: { theme, darkMode } }) => {
            if (typeof theme !== 'undefined') {
                state.theme = theme;
            }
            if (typeof darkMode !== 'undefined') {
                state.darkMode = darkMode;
            }
        },
        setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
            if (!state.theme) {
                if (typeof theme !== 'undefined') {
                    state.theme = theme;
                }
                if (typeof darkMode !== 'undefined') {
                    state.darkMode = darkMode;
                }
            }
        }, */
  },
});
export const {
  /* changeTheme, setDefaultTheme */
  /*   getuser,
  addFavSong, */
  addKey,
  removeKey,
} = slice.actions;
export default slice.reducer;
