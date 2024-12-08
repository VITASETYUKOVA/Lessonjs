import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./Layout.css";

export default function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <header className={`header-${theme}`}>
        <NavLink to="/" className="nav-link">
          Головна
        </NavLink>
        <NavLink to="/contacts" className="nav-link">
          Контакти
        </NavLink>
        <NavLink to="/about" className="nav-link">
          Про мене
        </NavLink>
        <button onClick={toggleTheme}>Змінити тему</button>
      </header>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
