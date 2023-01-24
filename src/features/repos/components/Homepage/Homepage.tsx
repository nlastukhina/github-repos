import React, { FC } from 'react';
import { Title } from '@components/Title/Title';
import { ReposList } from '../ReposList/ReposList';
import './Homepage.css';

export const Homepage: FC = () => {
  return (
    <div className="homepage">
      <Title>Топ популярных javascript репозиториев</Title>
      <ReposList />
    </div>
  );
};
