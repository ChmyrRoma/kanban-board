import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersInfo, setIsAuthorized } from '../reducers/user';

export const login = createAsyncThunk(
  'login',
  async(data, thunkAPI) => {
    const response = await console.log(data)
    if (response) {
      return response.data
    }
    return response
  },
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
