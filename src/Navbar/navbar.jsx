import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar(){
    return(
        <nav className="navbar">
            <ul>
           
                <li><Link to="/Cards/cardsdata">Books</Link></li>

                <li><Link to ="/Authors/hire">Hire An Author</Link></li>
               
                <li><Link to="/Library/library">Library</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar