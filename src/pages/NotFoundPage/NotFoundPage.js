// import BtnBackHome from 'components/Button/BtnBackHome/BtnBackHome';
import css from './NotFoundPage.module.css';



export default function NotFoundPage() {


  return (
    <div className={css.container}>
      <div className={css.not__found__box}>
        <span className={css.title__number}>4</span>
        <div className={css.image__rocket}></div>
        <span className={css.title__number}>4</span>
      </div>
      <p className={css.text}>
        We’re sorry, the page you requested could not be found. Please go back to the homepage.
      </p>
      {/*} <BtnBackHome/>*/}
    </div>
  )
};