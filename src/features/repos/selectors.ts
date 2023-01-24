import { RootState } from '@app/store';
import { Repos } from './types';

export const getRepos = (state: RootState): Repos[] => state.reposList.repos;
