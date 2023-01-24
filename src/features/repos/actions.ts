import { createAsyncThunk } from '@reduxjs/toolkit';
import { setRepos } from './slice';
import { apiFetchRepos } from '@app/api';

export const fetchRepos = createAsyncThunk('api/fetchRepos', (_, thunk) => {
  return apiFetchRepos().then((repos) => {
    thunk.dispatch(setRepos(repos.items));
  });
});
