import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createProduct: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    deleteProduct: (state, action) => {
      state.data = [...state.data.filter(item => item.id != action.payload)]
    },
    editProduct: (state, action) => {
      state.data = [...state.data.map(data => data.id == action.payload.id ? ({...data, ...action.payload}): data)]
    },
  },
})

export const { createProduct, deleteProduct, editProduct } = dataSlice.actions

export default dataSlice.reducer
