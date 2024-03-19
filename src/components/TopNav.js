import './topnav.css'
import { Link } from 'react-router-dom'
function TopNav() {
    return (<>
        <div class="header">
            <h2 class="text">Header</h2>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
            </nav>
        </div>
    </>)
}
export default TopNav;
