import css from './AuthNavigate.module.css';
import { Link } from 'react-router-dom';

const AuthNavigate = ({ authLink, linkText }) => {
  // console.log(authLink, linkText)
  return (
    <Link className={css.authlink} to={authLink}>
      {linkText}
    </Link>
  );
};
export default AuthNavigate;
