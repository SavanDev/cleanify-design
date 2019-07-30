import React from 'react';
import logo from '../img/logo.svg';

const Home: React.FC = () => {
    return(
        <div id="home">
            <header>
                <img src={logo} alt="Logo" />
                <h1>Cleanify Design</h1>
                <h2>HTML, CSS & JS personal framework</h2>
            </header>
            <section>
                <article>
                    <h3>About Cleanify</h3>
                    <hr/>
                    <p>HTML, CSS & JS framework made from scratch based on
                        <a href="http://samsunginter.net/OneUI-CSS/" target="_blank" rel="noopener noreferrer">One UI</a> (Samsung) and
                        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>.</p>
                    <p>Emerged from the need to mix both styles in a only framework for web design.</p>
                </article>
            </section>
            <section className="grid">
                <article>
                    <h4>HTML5 support</h4>
                    <hr/>
                    <p>Cleanify use tags implemented in HTML5 for better organization and code reading.</p>
                    <br/>
                    <p><b>Examples:</b> {'<nav>, <section>, <article>'}</p>
                </article>
                <article>
                    <h4>Dark Mode</h4>
                    <hr/>
                    <p>Exist two variant of the design (dark and light) and you can alternate between both with a simple button or anything html tag.</p>
                </article>
                <article>
                    <h4>Mobile ready</h4>
                    <hr/>
                    <p>The design has been adapted for better mobile viewing and anything screen with a responsive style like Bootstrap!</p>
                    <p><b>Note:</b> Sometimes the new features aren't available or not good implemented in a principle.</p>
                </article>
            </section>
        </div>
    );
}

export default Home;