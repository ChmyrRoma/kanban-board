import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import { usersSlice, IUsersSliceState } from './user';
import { eventsSlice } from './events';

export interface StoreState {
  user: IUsersSliceState,
  events: any
}

export const combinedReducers = combineReducers({
  [usersSlice.name]: usersSlice.reducer,
  [eventsSlice.name]: eventsSlice.reducer,
})

export type Store = ReturnType<typeof combinedReducers>;

const rootReducer = (state: Store, action: AnyAction) => combinedReducers(state, action)

export default rootReducer;
