import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../src/features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
