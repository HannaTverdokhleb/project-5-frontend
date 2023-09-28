//Готова кнопка зі стилями
//приймає пропс setOpen з Хедера, при кліку має відкрити модалку, Треба вписати пропс

import css from './AddFeebbackBtn.module.css';

const AddFeedbackBtn = () => {
  return (
    <button className={css.feedbackBtn} type="button" onClick={() => {}}>
      Feedback
    </button>
  );
};

export default AddFeedbackBtn;
