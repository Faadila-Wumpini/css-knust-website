import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="/assets/cssLogo.png"
          className="navbarLogo"
          alt="Society's Logo"
        />
      </Link>
      <div className="navbarLinks">
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
