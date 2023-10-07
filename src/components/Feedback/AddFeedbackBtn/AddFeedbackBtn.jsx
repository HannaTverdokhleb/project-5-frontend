import React, { useState } from 'react';
import css from './AddFeedbackBtn.module.css';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';

const AddFeedbackBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button className={css.feedbackBtn} type="button" onClick={openModal}>
        Feedback
      </button>
      {isModalOpen && (
        <AddFeedbackModal
          onClose={() => setIsModalOpen(false)}
          isOpenModal={isModalOpen}
        />
      )}
    </>
  );
};

export default AddFeedbackBtn;
