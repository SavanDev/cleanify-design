import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import packageJson from '../../package.json';

const Navbar: React.FC = () => {
    return (
        <nav>
            <Link to="/" className="navbar-title">Cleanify Design</Link>
            <ul className="navbar-menu">
                <li><Link to="/download"><FontAwesomeIcon icon="download" /> Download</Link></li>
                <li><Link to="/docs"><FontAwesomeIcon icon="book" /> Documentation</Link></li>
            </ul>
            <ul className="navbar-right-menu">
                <li id="version">v{ packageJson.version }</li>
                <li id="darkToggle"><FontAwesomeIcon icon="adjust" /></li>
            </ul>
        </nav>
    );
}

export default Navbar;