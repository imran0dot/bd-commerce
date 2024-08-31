import { configureStore } from '@reduxjs/toolkit';
import { woocommerceApi } from '../api/product.api';
import { productsApi } from '../api/stapi.product';
import { categoryApi } from '../api/strapi.category'
import categoryFilterSlice from '../features/categoryFilterSlice';
export const store = configureStore({
  reducer: {
    categoryFilter: categoryFilterSlice,
    [woocommerceApi.reducerPath]: woocommerceApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      woocommerceApi.middleware, 
      productsApi.middleware,
      categoryApi.middleware
    ),
});

// Infer the type of the store
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
