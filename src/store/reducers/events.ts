import { createSlice } from '@reduxjs/toolkit';
import { places } from '../../mockData';

import { IPlaces } from '../../types/places';

interface IProps {
  places: IPlaces[]
  isLoading: boolean
}

const initialState = {
  places: places,
  isLoading: false
} as IProps

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    events: (state, action) => {
      state.isLoading = action.payload
    }
  }
});
