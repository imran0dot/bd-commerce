import { configureStore } from '@reduxjs/toolkit';
import { woocommerceApi } from '../api/product.api';
import { productsApi } from '../api/stapi.product';

export const store = configureStore({
  reducer: {
    [woocommerceApi.reducerPath]: woocommerceApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(woocommerceApi.middleware, productsApi.middleware),
});

// Infer the type of the store
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
