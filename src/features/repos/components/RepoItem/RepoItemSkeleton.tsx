import React, { FC } from 'react';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';
import classNames from 'classnames';
import './RepoItem.css';

interface Props {
  className?: string;
}

export const RepoItemSkeleton: FC<Props> = ({ className }: Props) => {
  return (
    <>
      <div className={classNames('repo', className)}>
        <h3 className="repo-title">
          <SkeletonText className="skeleton-accent" />
        </h3>
        <div className="repo-description">
          <SkeletonText rowsCount={3} />
        </div>

        <div className="stats">
          <div className="stats-item">
            <StarIcon />
            <span className="stats-item-title">
              <SkeletonText />
            </span>
          </div>
          <div className="stats-item">
            <ForkIcon />
            <span className="stats-item-title">
              <SkeletonText />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
