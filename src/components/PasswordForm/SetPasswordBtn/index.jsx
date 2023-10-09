import React, { useState } from 'react';
import css from './index.module.css';
import SetPasswordModal from '../SetPasswordModal';

const SetPasswordBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className={css.passwordBtn} type='button' onClick={openModal}>
        set&nbsp;password
      </button>
      {isModalOpen && (
        <SetPasswordModal
          onClose={() => setIsModalOpen(false)}
          isOpenModal={isModalOpen}
        />
      )}
    </>
  );
};

export default SetPasswordBtn;
