import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'key',
  initialState: { key: '' },
  reducers: {
    addKey: (state, action) => {
      return (state = action.payload);
    },
    removeKey: (state, action) => {
      return (state = action.payload);
    },
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
export const { /* changeTheme, setDefaultTheme */ addKey, removeKey } =
  slice.actions;
export default slice.reducer;
