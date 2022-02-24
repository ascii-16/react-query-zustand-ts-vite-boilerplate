import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../types/loader.type';

const initialState: InitialState = {
  loadingActions: [],
};

const startLoadingAction = (
  state: InitialState,
  action: PayloadAction<string>
) => ({
  ...state,
  loadingActions: [...state.loadingActions, action.payload],
});

const stopLoadingAction = (
  state: InitialState,
  action: PayloadAction<string>
) => ({
  ...state,
  loadingActions: state.loadingActions.filter(
    (item) => item !== action.payload
  ),
});

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    startLoadingAction,
    stopLoadingAction,
  },
});

export default loaderSlice;
