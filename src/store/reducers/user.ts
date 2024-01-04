import { createSlice } from '@reduxjs/toolkit';

export interface IUsersSliceState {
  useInfo: IUserInfoState,
  isAuthorized: boolean
  isLoading: boolean
}

interface IUserInfoState {
  name: string,
  age: number
}

const initialState = {
  userInfo: {
    name: 'Roma',
    age: 32,
  },
  isAuthorized: false,
  isLoading: true
} as IUsersSliceState

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersInfo: (state) => {
      console.log('state.userInfo', state.userInfo)
    },
    setIsAuthorized: (state) => {
      state.isAuthorized = true
    },
    setIsLogOut: (state) => {
      state.isAuthorized = false
    }
  }
});

export const { usersInfo, setIsAuthorized, setIsLogOut } = usersSlice.actions
