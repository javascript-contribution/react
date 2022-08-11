import { configureStore } from '@reduxjs/toolkit';
import formRegisterSlice from './Features/FormSlice';
export const store = configureStore({
  reducer: {
    project: formRegisterSlice,
  }
} );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;