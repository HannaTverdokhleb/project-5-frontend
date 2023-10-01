// import {style} from 'components/User/AuthNavigate/AuthNavigate.module.css';
import { Link } from 'react-router-dom';


const AuthNavigate = ({authLink, linkText}) => {
    console.log(authLink, linkText)
    return (
        <Link to={authLink}>{linkText}</Link>
    )
}
export default AuthNavigate;