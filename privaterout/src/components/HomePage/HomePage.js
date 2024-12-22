import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/useSlice";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Ласкаво просимо на головну сторінку!</h1>
      <button className="home-button" onClick={handleLogout}>
        Вийти
      </button>
    </div>
  );
};

export default HomePage;
