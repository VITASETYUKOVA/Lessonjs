import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/useSlice";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Ласкаво просимо!</h1>
      <button className="login-button" onClick={handleLogin}>
        Увійти
      </button>
    </div>
  );
};

export default LoginPage;
