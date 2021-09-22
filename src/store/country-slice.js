import {createSlice} from '@reduxjs/toolkit'

const initialState = {
      countries : []
}
const countries = createSlice({
      name: "countries",
      initialState,
      reducers: {
    updateCountries(state, action){
          state.countries = action.payload

    }
      }
})

export const {updateCountries} = countries.actions

export default countries.reducer