import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type ColorSchemeType = 'dark' | 'light' | 'system';

// create a slice
export const themeslice = createSlice({
  name: 'theme',
  initialState: {
    colorScheme: 'system' as ColorSchemeType,
  },
  reducers: {
    setDarkMode: (state) => {
      state.colorScheme = 'dark';
    },
    setLightMode: (state) => {
      state.colorScheme = 'light';
    },
    setSystemMode: (state) => {
      state.colorScheme = 'system';
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    theme: themeslice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default the store
export default store;

// export the action
export const themeAction = themeslice.actions;
