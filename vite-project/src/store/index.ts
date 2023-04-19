import searchReducer from './searchSlice';
import formReducer from './formSlice';
import { unsplashApi } from './apiSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), unsplashApi.middleware],
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
