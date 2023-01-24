import React, { FC } from 'react';
import { ModalWrapper } from '@components/ModalWrapper/ModalWrapper';
import { CrossIcon } from '@components/Icons/CrossIcon';
import './RepoModal.css';

interface RepoModalProps {
  children: React.ReactNode;
  onClose: VoidFunction;
  shown: boolean;
}

export const RepoModal: FC<RepoModalProps> = ({ children, onClose, shown }: RepoModalProps) => {
  const _onClose = () => {
    onClose();
  };

  return (
    <ModalWrapper shown={shown} onClose={_onClose}>
      <div className="repo-modal">
        <button className="repo-modal-close" onClick={_onClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
    </ModalWrapper>
  );
};
