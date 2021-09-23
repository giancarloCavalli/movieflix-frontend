import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" exact><h2>MovieFlix</h2></NavLink>
    </div>
  )
}

export default Navbar;