import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repos } from './types';

interface InitialState {
  repos: Repos[];
}

const initialState: InitialState = {
  repos: [],
};

export const reposListSlice = createSlice({
  name: 'reposList',
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<Repos[]>) => {
      state.repos = action.payload;
    },
  },
});

export const { setRepos } = reposListSlice.actions;

export default reposListSlice.reducer;
