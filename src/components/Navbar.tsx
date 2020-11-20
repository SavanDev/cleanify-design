import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faDownload, faBook, faAddressCard, faLightbulb } from '@fortawesome/free-solid-svg-icons';

let darkState = false;

function darkMode() {
    document.body.setAttribute("dark", darkState ? "0" : "1");
    darkState = !darkState;
}

const Navbar: React.FC = () => {
    let urlVersion = "https://api.github.com/repos/SavanDev/cleanify-design/releases";

    (async () => {
        await fetch(urlVersion)
            .then(response => response.json())
            .then(json => { document.getElementById("version").innerHTML = json[0].tag_name });
    })();

    return (
        <nav>
            <Link to="/" className="navbar-title">Cleanify Design</Link>
            <ul className="navbar-menu">
                <li><Link to="/download"><FontAwesomeIcon icon={faDownload} /> Download</Link></li>
                <li><Link to="/docs"><FontAwesomeIcon icon={faBook} /> Documentation</Link></li>
                <li><Link to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link></li>
            </ul>
            <ul className="navbar-right-menu">
                <li id="version">v...</li>
                <li id="darkToggle" onClick={ () => darkMode() }><FontAwesomeIcon icon={faLightbulb} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;