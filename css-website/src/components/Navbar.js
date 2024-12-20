import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const getRoute = () => {
    switch (location.pathname) {
      case "/":
      case "/resources":
      case "/members":
        return "nav-white";
      case "/events":
      case "/contact":
        return "nav-black";
      default:
        return "nav-white";
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="/assets/cssLogo.png"
          className="navbarLogo"
          alt="Society's Logo"
        />
      </Link>
      <div className={getRoute()}>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/members">Members</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
