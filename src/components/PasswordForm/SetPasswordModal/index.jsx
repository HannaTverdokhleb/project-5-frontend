import { Modal } from 'components/Modal/Modal';
import Index from '../PasswordForm';

const SetPasswordModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Index onClose={onClose} />
    </Modal>
  );
};

export default SetPasswordModal;
