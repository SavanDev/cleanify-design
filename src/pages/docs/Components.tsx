import React from 'react';
import logo from '../../img/logo.svg';
import Highlight from 'react-highlight';

const Components: React.FC = () => {
    return (
        <section>
            <article>
                <h2>Header</h2>
                <header>
                    <img src={logo} alt="Logo" />
                    <h1>Cleanify Design</h1>
                    <h2>HTML, CSS & JS personal framework</h2>
                </header>
                <br />
                <Highlight className="codeSnippet">
                    {'<header>'}<br />
                    {'  <img src="IMAGE URL">'}<br />
                    {'  <h1>...</h1>'}<br />
                    {'  <h2>...</h2>'}<br />
                    {'</header>'}
                </Highlight>
            </article>
            <article>
                <h2>Header with background</h2>
                <header className="full" data-src="https://source.unsplash.com/X8o-P23flgI">
                    <h1>Example Title</h1>
                    <h2>Photo by <a href="https://unsplash.com/@adrienolichon">Adrien Olichon</a> on Unsplash</h2>
                </header>
                <br />
                <Highlight className="codeSnippet">
                    {'<header class="full" data-src="IMAGE URL">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
            </article>
            <article>
                <h2>Navbar</h2>
                <article>
                    <nav>
                        <a className="navbar-title" href="">Cleanify Example</a>
                        <ul className="navbar-menu">
                            <li>Home</li>
                            <li>Test</li>
                        </ul>
                        <ul className="navbar-right-menu">
                            <li>Right Text</li>
                        </ul>
                    </nav>
                </article>
                <Highlight className="codeSnippet">
                    {'<nav>'}<br/>
                    {'  <a class="navbar-title" href="URL">...</a>'}<br/>
                    {'  <ul class="navbar-menu">'}<br/>
                    {'      <li>...</li>'}<br/>
                    {'  </ul>'}<br/>
                    {'  <ul class="navbar-right-menu>'}<br/>
                    {'      <li>...</li>'}<br/>
                    {'  </ul>'}<br/>
                    {'</nav>'}
                </Highlight>
            </article>
            <article>
                <h2>List</h2>
                <ul>
                    <li>Hello World!</li>
                    <li>Example text</li>
                    <li>Test 3</li>
                </ul>
                <br />
                <Highlight className="codeSnippet">
                    {'<ul>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ul>'}
                </Highlight>
            </article>
            <article>
                <h2>Inline list</h2>
                <p>* Not visible in mobiles</p>
                <ol>
                    <li>Home</li>
                    <li>Dowload</li>
                    <li>Documentation</li>
                </ol>
                <Highlight className="codeSnippet">
                    {'<ol>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ol>'}
                </Highlight>
            </article>
        </section>
    );
}

export default Components;