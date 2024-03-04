import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './reducers/homeSlice'

export default configureStore({
  reducer: {
    home: homeSlice,
  },
})