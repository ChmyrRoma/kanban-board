import { createSlice } from '@reduxjs/toolkit';

export interface IUsersSliceState {
  useInfo: IUserInfoState,
  isAuthorized: boolean
  isLoading: boolean
}

interface IUserInfoState {
  active: boolean
  createdAt: string
  deletedAd: null
  email: string
  ethAddress: null
  id: number
  language: string
  photo: null
  photoId: null
  principal: string
  tenant: string
  updatedAt: string
}

const initialState = {
  userInfo: [],
  isAuthorized: false,
  isLoading: true
} as IUsersSliceState

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.userInfo.push(action.payload)
    },
    setIsAuthorized: (state) => {
      state.isAuthorized = true
    },
    setIsLogOut: (state) => {
      state.isAuthorized = false
    },
  }
});

export const { userInfo, setIsAuthorized, setIsLogOut } = usersSlice.actions
