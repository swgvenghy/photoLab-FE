import { configureStore, createSlice } from '@reduxjs/toolkit'
import homeData from '../temporaryData/Home.json'
import competitionList from '../temporaryData/CompetitionList.json'

const homeSlice = createSlice({
  name: 'home',
  initialState : homeData,
  reducers: {}
})
const competitionListSlice = createSlice({
  name: 'competitionList',
  initialState: competitionList,
  reducers: {}
})
export const { reducer: homeReducer } = homeSlice
export const { reducer: competitionListReducer } = competitionListSlice

const store = configureStore({
  reducer: {
    home: homeReducer,
    competitionList: competitionListReducer,
  }
})

export default store