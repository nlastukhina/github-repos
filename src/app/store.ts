import { configureStore, ThunkDispatch, ThunkAction, PayloadAction } from '@reduxjs/toolkit';
import reposListReducer from '@features/repos/slice';

export const store = configureStore({
  reducer: {
    reposList: reposListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, PayloadAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, PayloadAction>;
