import React from 'react';
import logo from '../img/cd-current.svg';
import version from '../../package.json';
import Highlight from 'react-highlight';
import DarkExample from '../img/CDExample.png';
import MobileExample from '../img/Mobile.png';

const Home: React.FC = () => {
    return (
        <div id="home">
            <header className="withImage">
                <img src={logo} alt="Logo" />
                <h1>Cleanify Design</h1>
                <h2>{version.description}</h2>
            </header>
            <article className="grid">
                <section className="transparent">
                    <h4>HTML5 support</h4>
                    <p>Cleanify use tags implemented in HTML5 for better organization and code reading.</p>
                    <p><b>Examples:</b> {'<nav>, <section>, <article>'}, etc.</p>
                </section>
                <section className="transparent">
                    <Highlight>
                        {'<nav>'}<br />
                        {'  <a class="navbar-title">Cleanify Design</a>'}<br />
                        {'  <ul class="navbar-menu">'}<br />
                        {'      <li>Example Text</li>'}<br />
                        {'  </ul>'}<br />
                        {'</nav>'}<br />
                        {'<article>'}<br />
                        {'  <section>...</section>'}<br />
                        {'</article>'}<br />
                        {'<footer>...</footer>'}
                    </Highlight>
                </section>
            </article>
            <article className="grid">
                <section className="transparent">
                    <h4>Dark Mode</h4>
                    <p>The framework has a dark variant that can also be modified with the theme system.</p>
                    <p>You <b>can activate</b> it using:</p>
                    <Highlight>
                        {'<body dark="1">'}<br />
                        {'  ...'}<br />
                        {'</body>'}
                    </Highlight>
                </section>
                <section className="transparent">
                    <img src={DarkExample} alt="Example" className="rounded" width="100%"/>
                </section>
            </article>
            <article className="grid">
                <section className="transparent">
                    <h4>Mobile ready</h4>
                    <p>The design has been adapted for better mobile viewing and anything screen with a responsive style like Bootstrap!</p>
                    <hr/>
                    <p>The new features were adapted so that, both mobile and desktop, they are visible and pleasing to the eye.</p>
                    <p>Now with a own responsive system that work in desktop, tablet and mobile resolutions properly!</p>
                </section>
                <section className="transparent">
                    <img src={MobileExample} alt="Mobile" width="100%"/>
                </section>
            </article>
        </div>
    );
}

export default Home;