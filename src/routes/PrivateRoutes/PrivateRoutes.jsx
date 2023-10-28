import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContextProvider);
  const location = useLocation()

  if (loading) {
    return <div>Loading</div>
  }

  if (!user) {
   return <Navigate to="/login" state={{from:location}}></Navigate>;
  }

  return (
    <div>{children}</div>
  )
};

export default PrivateRoutes;
