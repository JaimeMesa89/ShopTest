import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Rastro Test </h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"> New Product </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;