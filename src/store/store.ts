import { configureStore } from '@reduxjs/toolkit';
import { combinedReducers, StoreState } from './reducers/root';

export const store = configureStore({
  reducer: combinedReducers
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export type StoreType = StoreState;
