import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsAuthorized, userInfo, setIsLoading } from '../reducers/user';
import { userAPI } from '../rest/user';

export const login = createAsyncThunk(
  'login',
  async(data, thunkAPI) => {
    const response = await userAPI.login(data)

    if (response.data?.accessToken) {
      localStorage.setItem('token', response.data?.accessToken)
      thunkAPI.dispatch(getUser())

      return response.data
    }

    return response.data
  },
)

export const getUser = createAsyncThunk(
  'getUser',
  async(_, thunkAPI) => {
    const response = await userAPI.getUser()

    if (response.data) {
      thunkAPI.dispatch(userInfo(response.data))
      return thunkAPI.dispatch(setIsAuthorized(true))
    }
  }
)

export const logOut = createAsyncThunk(
  'logOut',
  async (_, thunkAPI) => {
    try {
      await localStorage.removeItem('token')
      thunkAPI.dispatch(setIsAuthorized(false))
    } catch (error: any) {
      return error
    }
  }
)

export const checkAuth = createAsyncThunk(
  'checkAuth',
  async (_, thunkAPI) => {
    try {
      const token = await localStorage.getItem('token')
      if (token) {
        await thunkAPI.dispatch(getUser())
      }
      thunkAPI.dispatch(setIsLoading())
    } catch (error) {
      return error
    }
  }
)

export const register = createAsyncThunk(
  'register',
  async(data, thunkAPI) => {
    const response = await console.log(data)
    if (response) {
      return response.data
    }
    return response
  },
)
