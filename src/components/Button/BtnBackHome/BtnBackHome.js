// import { useNavigate } from 'react-router-dom';
import css from './BtnBackHome.module.css';

export default function BtnBackHome() {
   /* const backToHome = useNavigate();
    
    const handleClick = () => {
        backToHome('/user/account');
    };*/

  return (
      <button className={css.back__button}
         // onClick={handleClick} type="button"
      >
      Back to home
    </button>
  )
};