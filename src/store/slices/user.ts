import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsAuthorized, setIsLogOut, userInfo } from '../reducers/user';
import { userAPI } from '../rest/user';

export const login = createAsyncThunk(
  'login',
  async(data, thunkAPI) => {
    const response = await userAPI.login(data)

    if (response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken)
      thunkAPI.dispatch(getUser())

      return response
    }

    return response.data
  },
)

export const getUser = createAsyncThunk(
  'getUser',
  async(_, thunkAPI) => {
    const response = await userAPI.getUser()
    await thunkAPI.dispatch(setIsAuthorized())

    if (response.data) {
      return thunkAPI.dispatch(userInfo(response.data))
    }
  }
)

export const logOut = createAsyncThunk(
  'logOut',
  async (_, thunkAPI) => {
    try {
      await localStorage.removeItem('token')
      thunkAPI.dispatch(setIsLogOut())
    } catch (error: any) {
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

