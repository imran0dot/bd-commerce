import { configureStore } from '@reduxjs/toolkit';
import { woocommerceApi } from '../api/product.api';

export const store = configureStore({
  reducer: {
    [woocommerceApi.reducerPath]: woocommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(woocommerceApi.middleware),
});

// Infer the type of the store
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
