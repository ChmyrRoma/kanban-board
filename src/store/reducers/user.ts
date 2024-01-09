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
  role?: string
  tenant: string
  updatedAt: string
}

const initialState = {
  userInfo: null,
  isAuthorized: false,
  isLoading: true,
} as IUsersSliceState

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload
    },
    setIsLoading: (state) => {
      state.isLoading = false
    },
  }
});

export const { userInfo, setIsAuthorized, setIsLoading } = usersSlice.actions
