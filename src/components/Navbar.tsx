import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar: React.FC<INavbar> = ({Version}) => {
    return (
        <nav>
            <Link to="/" className="navbar-title">Cleanify Design</Link>
            <ul className="navbar-menu">
                <li><a href="https://github.com/SavanDev/cleanify-design/releases">Download</a></li>
                <li><Link to="/docs">Documentation</Link></li>
            </ul>
            <ul className="navbar-right-menu">
                <li>v{Version}</li>
                <li id="darkToggle"><FontAwesomeIcon icon="adjust" /></li>
            </ul>
        </nav>
    );
}

interface INavbar {
    Version: string
}

export default Navbar;