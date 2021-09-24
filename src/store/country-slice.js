import {createSlice} from '@reduxjs/toolkit'

const initialState = {
      countries : [],
      darkMode : false,
      isLoading:false,
      selectedCountry:null
}
const countries = createSlice({
      name: "countries",
      initialState,
      reducers: {
    updateCountries(state, action){
          state.countries = action.payload

    },
    updateMode(state){
          state.darkMode = !state.darkMode
    },
    updateLoading(state, action){
          state.isLoading= action.payload
    },
    updateSelected(state, action){
          state.selectedCountry = action.payload

    }

      }
})

export const {updateCountries, updateMode, updateLoading, updateSelected} = countries.actions

export default countries.reducer