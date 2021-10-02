import { NavLink } from "react-router-dom";
import { isAuthenticated } from "utils/auth";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" exact>
        <h2>MovieFlix</h2>
      </NavLink>
      <span className="navbar-login">
        { isAuthenticated() ? (
            <a href="/">SAIR</a>
          ) : (
            <span></span>
          )}
      </span>
    </div>
  );
};

export default Navbar;
