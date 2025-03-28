import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
               
                <li><Link to="/cardsdata">Books</Link></li>

                <li><Link to ="/test">Hire An Author</Link></li>
               
                <li><Link to="/library">Library</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar