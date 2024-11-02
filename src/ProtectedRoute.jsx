import { Navigate } from 'react-router-dom';
import { auth } from '../firebase.config'; // Adjust this import path based on your file structure

const ProtectedRoute = ({ children }) => {
  if (!auth.currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;