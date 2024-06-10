import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.authenticated) {
      navigate("/login");
    }
  });

  return <Outlet />;
};

export default Protected;
