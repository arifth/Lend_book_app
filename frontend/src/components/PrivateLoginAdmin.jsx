import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateLoginAdmin({ isLoggedIn, role }) {
  //   const [state, dispatch] = useContext(UserContext)
  return (
    <>{isLoggedIn && role === "ADMIN" ? <Outlet /> : <Navigate to="/" />}</>
  );
}
