import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import { usersSlice } from './user';

export interface StoreState {
  user: any
}

export const combinedReducers = combineReducers({
  [usersSlice.name]: usersSlice.reducer,
})

export type Store = ReturnType<typeof combinedReducers>;

const rootReducer = (state: Store, action: AnyAction) => combinedReducers(state, action)

export default rootReducer;
