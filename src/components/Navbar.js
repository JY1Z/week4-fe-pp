import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import Registration from "./Registration";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
        <Link to="/register" className="nav-link">
          Register
        </Link>
 
      </div>
    </nav>
  );
};

export default Navbar;
