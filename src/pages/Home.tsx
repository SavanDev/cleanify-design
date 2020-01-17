import React from 'react';
import logo from '../img/cd-next.svg';
import version from '../../package.json';

const Home: React.FC = () => {
    return(
        <div id="home">
            <header>
                <img src={logo} alt="Logo"/>
                <h1>Cleanify Design</h1>
                <h2>{version.description}</h2>
            </header>
            <h1 className="styledTitle">Example Test</h1>
            <article>
                <section>
                    <h3>About Cleanify</h3>
                    <p>HTML, CSS & JS framework made from scratch based on <a href="http://samsunginter.net/OneUI-CSS/" target="_blank" rel="noopener noreferrer">One UI</a> (Samsung) and <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>.</p>
                    <p>Emerged from the need to mix both styles in a only framework for web design.</p>
                </section>
            </article>
            <article className="grid">
                <section>
                    <h4>HTML5 support</h4>
                    <p>Cleanify use tags implemented in HTML5 for better organization and code reading.</p>
                    <p><b>Examples:</b> {'<nav>, <section>, <article>'}</p>
                </section>
                <section>
                    <h4>Dark Mode</h4>
                    <p>Exist two variant of the design (dark and light) and you can alternate between both with a simple button or anything html tag.</p>
                </section>
                <section>
                    <h4>Mobile ready</h4>
                    <p>The design has been adapted for better mobile viewing and anything screen with a responsive style like Bootstrap!</p>
                </section>
            </article>
        </div>
    );
}

export default Home;