import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setAuthHeader } from '../../redux/Auth/operations';

const GoogleLoginPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setAuthHeader(token);
    navigate('/calendar');
  }, [navigate, token]);

  return (
    <Loader />
  );
};

export default GoogleLoginPage;
