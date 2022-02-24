import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InitialState } from '@/store/types/auth.type';
import type { LoginBody } from '@/types/auth';

const initialState: InitialState = {
  isAuthenticated: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const login = (state: InitialState, _action: PayloadAction<LoginBody>) => state;

const setIsAuthenticated = (
  state: InitialState,
  action: PayloadAction<InitialState['isAuthenticated']>
) => ({
  ...state,
  isAuthenticated: action.payload,
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login,
    setIsAuthenticated,
  },
});

export default authSlice;
