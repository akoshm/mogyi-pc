import './topnav.css'
import { Link } from 'react-router-dom'
function TopNav() {
    return (<>
        <div class="header">
            <h2 class="text">Header</h2>
            <nav>
                <li class='btn'><Link to="/">Home</Link></li>
                <li class='btn'><Link to="/about">About Us</Link></li>
                <li class='btn'><Link to="/contact">Contact</Link></li>
                <li class='btn'> <Link to="/shop">Shop</Link></li>
            </nav>
        </div>
    </>)
}
export default TopNav;
