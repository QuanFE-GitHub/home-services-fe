import { useNavigate } from 'react-router-dom';
import { exactRouter } from 'src/routes/routes';

const ProtectedRoutes = ({ component }) => {
  const navigate = useNavigate();
  return navigate(`${exactRouter.auth}`);
};

export default ProtectedRoutes;
