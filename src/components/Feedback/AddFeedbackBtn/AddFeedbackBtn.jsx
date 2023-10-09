import React, { useState } from 'react';
import css from './AddFeedbackBtn.module.css';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnReviews } from 'redux/reviews/reviewsSelectors';
import { fetchOwnReview } from 'redux/reviews/reviewsOperations';

const AddFeedbackBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const ownReview = useSelector(selectOwnReviews);

  const openModal = () => {
    if (!ownReview.comment) {
      dispatch(fetchOwnReview())
    }
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
