import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersetupReducer from "../features/usersetup/usersetupSlice"
import walletsetupReducer from "../features/wallet/walletsetupSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersetup: usersetupReducer,
    walletsetup: walletsetupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
