import {createSlice} from '@reduxjs/toolkit'

const initialState = {
      countries : [],
      darkMode : false
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
    }
      }
})

export const {updateCountries, updateMode} = countries.actions

export default countries.reducer