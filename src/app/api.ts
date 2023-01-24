import { ReposAPI } from '@features/repos/types';

export const apiFetchRepos = (): Promise<ReposAPI> => {
  return fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&page=1').then((response) =>
    response.json()
  );
};
