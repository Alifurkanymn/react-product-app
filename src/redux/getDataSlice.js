import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataId: "",
}

export const dataIdSlice = createSlice({
  name: 'dataId',
  initialState,
  reducers: {
    getProductId: (state, action) => {
      state.dataId = action.payload
    },
    
  },
})

export const { getProductId } = dataIdSlice.actions

export default dataIdSlice.reducer
