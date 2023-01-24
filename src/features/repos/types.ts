export interface Repos {
  id: number;
  name: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };
  topics: [];
}

export interface ReposAPI {
  items: Repos[];
}
