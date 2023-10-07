import { configureStore } from '@reduxjs/toolkit'
import dataIdSlice from './getDataSlice'
import modalSlice from './modalSlice'
import dataSlice from './dataSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    data: dataSlice,
    dataId: dataIdSlice,
  },
})
