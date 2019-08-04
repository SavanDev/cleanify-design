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
                <Highlight className="codeSnippet html">
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
                <Highlight className="codeSnippet html">
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
                <Highlight className="codeSnippet html">
                    {'<nav>'}<br/>
                    {'  <a class="navbar-title" href="URL">...</a>'}<br/>
                    {'  <ul class="navbar-menu">'}<br/>
                    {'      <li>...</li>'}<br/>
                    {'  </ul>'}<br/>
                    {'  <ul class="navbar-right-menu">'}<br/>
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
                    <li><a href="#">Link example</a></li>
                </ul>
                <br />
                <Highlight className="codeSnippet html">
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
                    <li><a href="#">Download</a></li>
                    <li>Documentation</li>
                </ol>
                <Highlight className="codeSnippet html">
                    {'<ol>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ol>'}
                </Highlight>
            </article>
            <article>
                <h2>Forms</h2>
                <article>
                    <form>
                        <h4>Common inputs</h4>
                        <hr/>
                        <p>Text</p>
                        <input type="text" placeholder="Text" />
                        <p>Number</p>
                        <input type="number" placeholder="Number" />
                        <p>Password</p>
                        <input type="password" placeholder="Password" />
                        <p>Date</p>
                        <input type="date" />
                        <p>Email</p>
                        <input type="email" placeholder="Email@test.com" />
                        <p>File</p>
                        <input type="file" />
                        <p>Color</p>
                        <input type="color" />
                        <hr/>
                        <Highlight className="codeSnippet html">
                            {'<p>...</p>'}<br/>
                            {'<input type="..." placeholder="..." />'}
                        </Highlight>
                    </form>
                </article>
                <article>
                    <form>
                        <h4>Form groups</h4>
                        <hr/>
                        <div className="group">
                            <fieldset>
                                <p>Group Text</p>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <p>Group Date</p>
                                <input type="date" />
                            </fieldset>
                        </div>
                        <hr/>
                        <Highlight className="codeSnippet html">
                            {'<div class="group">'}<br/>
                            {'  <fieldset>'}<br/>
                            {'      ...'}<br/>
                            {'  </fieldset>'}<br/>
                            {'</div>'}
                        </Highlight>
                    </form>
                </article>
                <article>
                    <form>
                        <h4>Checkbox & Radio</h4>
                        <hr/>
                        <input type="checkbox" id="checkTest" />
                        <label htmlFor="checkTest">Checkbox</label>
                        <input type="radio" id="radioTest" />
                        <label htmlFor="radioTest">Radio</label>
                        <hr/>
                        <Highlight className="codeSnippet html">
                            {'<input type="checkbox/radio" id="..." />'}<br/>
                            {'<label for="...">...</label>'}
                        </Highlight>
                    </form>
                </article>
                <article>
                    <form>
                        <h4>Buttons</h4>
                        <hr/>
                        <input type="button" value="Button"/>
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Reset"/>
                        <button>Button tag</button>
                        <hr/>
                        <Highlight className="codeSnippet html">
                            {'<input type="button/submit/reset" value="..." />'}<br/>
                            {'<button>...</button>'}
                        </Highlight>
                    </form>
                </article>
            </article>
        </section>
    );
}

export default Components;