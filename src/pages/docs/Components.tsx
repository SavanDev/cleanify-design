import React from 'react';
import logo from '../../img/logo.svg';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

const Components: React.FC = () => {
    return (
        <article>
            <section>
                <h2>Forms</h2>
                <section>
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
                        <p>Select</p>
                        <select>
                            <option>Test 1</option>
                            <option>Test 2</option>
                            <option>Test 3</option>
                        </select>
                        <p>Textarea</p>
                        <textarea cols={30} rows={10}>Text Example</textarea>
                        <hr/>
                        <Highlight className="codeSnippet html">
                            {'<p>...</p>'}<br/>
                            {'<input type="..." placeholder="..." />'}<br/>
                            {'<textarea cols="..." rows="..."></textarea>'}
                        </Highlight>
                    </form>
                </section>
                <section>
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
                </section>
                <section>
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
                </section>
                <section>
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
                </section>
            </section>
            <section>
                <h2>Footer</h2>
                <section>
                    <footer>
                        <small>Footer without links</small>
                    </footer>
                    <footer>
                        <small>SavanDev - MIT License</small>
                        <ol>
                            <li>Link 1</li>
                            <li>Link 2</li>
                        </ol>
                    </footer>
                </section>
                <Highlight className="codeSnippet html">
                    {'<footer>'}<br/>
                    {'  <small>...</small>'}<br/>
                    {'</footer>'}<br/>
                    <br/>
                    {'<footer>'}<br/>
                    {'  <small>...</small>'}<br/>
                    {'  <ol>'}<br/>
                    {'      <li>...</li>'}<br/>
                    {'  </ol>'}<br/>
                    {'</footer>'}
                </Highlight>
            </section>
            <section>
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
            </section>
            <section>
                <h2>Header gradients</h2>
                <header className="gradient-1" >
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-1">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br/>
                <header className="gradient-2">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-2">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br/>
                <header className="gradient-3">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-3">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br/>
                <header className="gradient-4">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-4">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br/>
                <header className="gradient-5">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-5">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
            </section>
            <section>
                <h2>Inline list</h2>
                <p>* Not visible in mobiles</p>
                <ol>
                    <li>Home</li>
                    <li><Link to ={process.env.PUBLIC_URL + "/docs/components"}>Download</Link></li>
                    <li>Documentation</li>
                </ol>
                <Highlight className="codeSnippet html">
                    {'<ol>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ol>'}
                </Highlight>
            </section>
            <section>
                <h2>List</h2>
                <ul>
                    <li>Hello World!</li>
                    <li>Example text</li>
                    <li>Test 3</li>
                    <li><Link to ={process.env.PUBLIC_URL + "/docs/components"}>Link example</Link></li>
                </ul>
                <br />
                <Highlight className="codeSnippet html">
                    {'<ul>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ul>'}
                </Highlight>
            </section>
            <section>
                <h2>Navbar</h2>
                <section>
                    <nav>
                        <Link to ={process.env.PUBLIC_URL + "/docs/components"} className="navbar-title">Cleanify Example</Link>
                        <ul className="navbar-menu">
                            <li>Home</li>
                            <li>Test</li>
                        </ul>
                        <ul className="navbar-right-menu">
                            <li>Right Text</li>
                        </ul>
                    </nav>
                </section>
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
            </section>
        </article>
    );
}

export default Components;