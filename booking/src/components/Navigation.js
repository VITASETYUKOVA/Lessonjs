import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  const items = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/about">About</Link> },
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">Booking</span>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className="menu"
        items={items}
      />
    </div>
  );
};

export default Navigation;
