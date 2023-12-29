import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersInfo: (state) => {
      state
    },
    setIsAuthorized: (state) => {
      state.IsAuthorized = false
    }
  }
});

export const { usersInfo, setIsAuthorized } = usersSlice.actions
