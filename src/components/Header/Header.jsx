import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="main-header">
      {" "}
      <div className="college-name">
        <Link to="/">Vivekanand College</Link>{" "}
      </div>
      <nav className="navbar desktop-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/courses" className="nav-item">
          Courses
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/admission" className="nav-item btn primary-btn">
          Apply Now!
        </Link>{" "}
      </nav>
    </header>
  );
}
export default Header;