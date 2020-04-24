import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faDownload, faBook, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

const Navbar: React.FC = () => {
    let urlVersion = "https://api.github.com/repos/SavanDev/cleanify-design/releases";

    (async () => {
        await fetch(urlVersion)
            .then(response => response.json())
            .then(json => {
                ReactDOM.render(
                    <li>{json[0].tag_name}</li>,
                    document.getElementById("version")
                );
            });
    })();

    return (
        <nav>
            <Link to="/" className="navbar-title">Cleanify Design</Link>
            <ul className="navbar-menu">
                <li><Link to="/download"><FontAwesomeIcon icon={faDownload} /> Download</Link></li>
                <li><Link to="/docs"><FontAwesomeIcon icon={faBook} /> Documentation</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link></li>
            </ul>
            <ul className="navbar-right-menu" id="version">
                <li>v...</li>
            </ul>
        </nav>
    );
}

export default Navbar;