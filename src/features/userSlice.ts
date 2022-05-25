import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';

import type { User } from '../models/User';

type SliceInitialState = {
  user: User | null;
};

const initialState: SliceInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
