import React, { FC, useState } from 'react';
import { Repos } from '@features/repos/types';
import { RepoModal } from '@features/repos/components/RepoModal/RepoModal';
import { RepoItem } from '@features/repos/components/RepoItem/RepoItem';

interface RepoItemProps {
  repo: Repos;
}

export const RepoSlide: FC<RepoItemProps> = ({ repo }: RepoItemProps) => {
  const [repoModalShown, setRepoModalShown] = useState(false);

  return (
    <>
      <RepoItem
        repo={repo}
        onClick={(event) => {
          event.stopPropagation();
          setRepoModalShown(!repoModalShown);
        }}
      />

      <RepoModal
        shown={repoModalShown}
        onClose={() => {
          setRepoModalShown(false);
        }}
      >
        <RepoItem repo={repo} extended={true} />
      </RepoModal>
    </>
  );
};
