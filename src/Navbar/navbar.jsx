import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/cards">Books</Link></li>
        <li><Link to="/authors">Hire An Author</Link></li>
        <li><Link to="/library">Library</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
