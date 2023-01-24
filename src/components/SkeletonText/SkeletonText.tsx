import React, { FC } from 'react';
import './SkeletonText.css';
import { repeat } from '@app/utils';
import classNames from 'classnames';

interface SkeletonTextProps {
  rowsCount?: number;
  className?: string;
}

export const SkeletonText: FC<SkeletonTextProps> = ({ rowsCount = 1, className }: SkeletonTextProps) => {
  return (
    <span className={classNames('skeleton-text', className)}>
      {repeat((i) => {
        return <span key={i} className="skeleton-text__row skeleton-gradient" />;
      }, rowsCount)}
    </span>
  );
};
