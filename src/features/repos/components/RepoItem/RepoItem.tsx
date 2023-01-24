import React, { FC } from 'react';
import { Repos } from '@features/repos/types';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';
import { LinkIcon } from '@components/Icons/LinkIcon';
import classNames from 'classnames';
import './RepoItem.css';

interface RepoItemProps {
  repo: Repos;
  extended?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
}

export const RepoItem: FC<RepoItemProps> = ({ repo, extended = false, onClick }: RepoItemProps) => {
  return (
    <>
      <div className={classNames('repo', { 'repo-extended': extended })} onClick={onClick}>
        {extended && <h2 className="repo-company">{repo.owner.login}</h2>}

        <h3 className="repo-title">{repo.name}</h3>
        <div className="repo-description">{repo.description}</div>

        {extended && (
          <>
            {repo.homepage && (
              <div className="repo-link-wrap">
                <LinkIcon />
                <a href={repo.homepage} className="repo-link">
                  {repo.homepage}
                </a>
              </div>
            )}

            {repo.topics.length > 0 && (
              <div className="repo-topic-wrap">
                {repo.topics.map((topic, index) => {
                  return (
                    <span className="repo-topic" key={index}>
                      {topic}
                    </span>
                  );
                })}
              </div>
            )}
          </>
        )}

        <div className="stats">
          <div className="stats-item">
            <StarIcon />
            <span className="stats-item-title">{repo.stargazers_count}</span>
          </div>
          <div className="stats-item">
            <ForkIcon />
            <span className="stats-item-title">{repo.forks_count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
