import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import packageJson from '../../package.json';
import { faSun, faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { getDarkMode } from "./Cookies";

class Navbar extends React.Component<any, INavbar> {
    constructor(props: any) {
        super(props);
        this.state = { icon: getDarkMode() ? faMoon : faSun };
        this.iconToggle = this.iconToggle.bind(this);
    }

    iconToggle() {
        this.setState(state => ({
            icon: (state.icon === faMoon ? faSun : faMoon)
        }))
    }

    render() {
        return (
            <nav>
                <Link to ="/" className="navbar-title">Cleanify Design</Link>
                <ul className="navbar-menu">
                    <li><Link to ="/download"><FontAwesomeIcon icon="download" /> Download</Link></li>
                    <li><Link to ="/docs"><FontAwesomeIcon icon="book" /> Documentation</Link></li>
                </ul>
                <ul className="navbar-right-menu">
                    <li id="version">v{ packageJson.version }</li>
                    <li id="darkToggle" onClick={this.iconToggle}><FontAwesomeIcon icon={this.state.icon}/></li>
                </ul>
            </nav>
        );
    }
}

interface INavbar {
    icon: IconDefinition;
}

export default Navbar;