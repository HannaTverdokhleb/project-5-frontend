import { Modal } from '../../Modal/Modal';
import { FeedbackForm } from '../FeedBackForm/FeedbackForm';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
