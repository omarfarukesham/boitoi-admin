import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from '../feature/toggle/toggleSlice'
import { apiSlice } from '@/feature/product/apiSlice'
export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch