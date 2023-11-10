import { configureStore, createSlice } from '@reduxjs/toolkit'
import homeData from '../temporaryData/Home.json'

const homeSlice = createSlice({
  name: 'home',
  initialState : homeData,
  reducers: {}
})
export const { reducer: homeReducer } = homeSlice

const store = configureStore({
  reducer: {
    home: homeReducer,
  }
})

export default store