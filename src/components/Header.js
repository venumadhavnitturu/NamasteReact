import { LOGO_URL } from "../utils/constants";
export const Header = () => (
    <div className="header">
        <div className="logo">
            <img className="logo-img" src={LOGO_URL} />
        </div>
        <ul className="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
);

export default Header;