import React from 'react';
import logo from '../../img/cd-current.svg';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

const Components: React.FC = () => {
    return (
        <article>
            <section className="transparent">
                <h2>Alerts</h2>
                <p>Alerts like bootstrap!</p>
                <section>
                    <p className="alert-primary">Primary alert!</p>
                    <p className="alert-secondary">Secondary alert!</p>
                    <p className="alert-success">Success alert!</p>
                    <p className="alert-danger">Danger alert!</p>
                    <p className="alert-warning">Warning alert!</p>
                    <p className="alert-info">Info alert!</p>
                </section>
                <Highlight>
                    {'<p class="alert-(primary/secondary/success/danger/warning/info)">'}<br />
                    {'  ...'}<br />
                    {'</p>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Forms</h2>
                <section>
                    <form>
                        <h4>Common inputs</h4>
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
                        <p>Select</p>
                        <select>
                            <option>Test 1</option>
                            <option>Test 2</option>
                            <option>Test 3</option>
                        </select>
                        <p>Select multiple</p>
                        <select multiple>
                            <option>Test 1</option>
                            <option>Test 2</option>
                            <option>Test 3</option>
                        </select>
                        <p>Textarea</p>
                        <textarea cols={30} rows={10} defaultValue="Text Example"></textarea>
                        <Highlight>
                            {'<p>...</p>'}<br />
                            {'<input type="..." placeholder="..." />'}<br />
                            {'<textarea cols="..." rows="..."></textarea>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Form groups</h4>
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
                        <Highlight>
                            {'<div class="group">'}<br />
                            {'  <fieldset>'}<br />
                            {'      ...'}<br />
                            {'  </fieldset>'}<br />
                            {'</div>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Checkbox & Radio</h4>
                        <div className="group">
                            <fieldset>
                                <input type="checkbox" id="checkTest" defaultChecked />
                                <label htmlFor="checkTest">Checkbox 1</label>
                                <input type="checkbox" id="checkTest2" />
                                <label htmlFor="checkTest2">Checkbox 2</label>
                                <input type="checkbox" id="checkTest3" />
                                <label htmlFor="checkTest3">Checkbox 3</label>
                            </fieldset>
                            <fieldset>
                                <input type="radio" id="radioTest" name="test" />
                                <label htmlFor="radioTest">Radio 1</label>
                                <input type="radio" id="radioTest2" name="test" defaultChecked />
                                <label htmlFor="radioTest2">Radio 2</label>
                                <input type="radio" id="radioTest3" name="test" />
                                <label htmlFor="radioTest3">Radio 3</label>
                            </fieldset>
                        </div>
                        <Highlight>
                            {'<input type="checkbox/radio" id="..." />'}<br />
                            {'<label for="...">...</label>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Buttons</h4>
                        <input type="button" value="Button" />
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                        <button>Button tag</button>
                        <Highlight>
                            {'<input type="button/submit/reset" value="..." />'}<br />
                            {'<button>...</button>'}
                        </Highlight>
                    </form>
                </section>
            </section>
            <section className="transparent">
                <h2>Footer</h2>
                <section>
                    <footer>
                        <p>Footer without list/links</p>
                    </footer>
                    <footer>
                        <p>Footer with list/links</p>
                        <ol>
                            <li>Text 1</li>
                            <li>Text 2</li>
                        </ol>
                    </footer>
                </section>
                <Highlight>
                    {'<footer>'}<br />
                    {'  <p>...</p>'}<br />
                    {'</footer>'}<br />
                    <br />
                    {'<footer>'}<br />
                    {'  <p>...</p>'}<br />
                    {'  <ol>'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ol>'}<br />
                    {'</footer>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Header</h2>
                <section>
                    <header className="withImage">
                        <img src={logo} alt="Logo" />
                        <h1>Example</h1>
                        <h2>Example Subtitle</h2>
                    </header>
                </section>
                <Highlight>
                    {'<header class="withImage">'}<br />
                    {'  <img src="IMAGE URL">'}<br />
                    {'  <h1>...</h1>'}<br />
                    {'  <h2>...</h2>'}<br />
                    {'</header>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Header gradients</h2>
                <header className="gradient-primary" >
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-primary">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-secondary">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-secondary">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-success">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-success">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-danger">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-danger">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-warning">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-warning">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-info">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-info">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-light">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-light">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-dark">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-dark">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-muted">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-muted">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <header className="gradient-lightgray">
                    <h1>Example Title</h1>
                </header>
                <Highlight>
                    {'<header class="gradient-lightgray">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Inline list</h2>
                <ol>
                    <li>Text</li>
                    <li><Link to="/docs/components">Link</Link></li>
                    <li>Text</li>
                </ol>
                <Highlight>
                    {'<ol>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ol>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>List</h2>
                <ul>
                    <li>Hello World!</li>
                    <li>Example text</li>
                    <li>Test 3</li>
                    <li><Link to="/docs/components">Link example</Link></li>
                </ul>
                <Highlight>
                    {'<ul>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ul>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Navbar</h2>
                <section>
                    <nav>
                        <Link to="/docs/components" className="navbar-title">Cleanify Example</Link>
                        <ul className="navbar-menu">
                            <li>Home</li>
                            <li>Test</li>
                        </ul>
                        <ul className="navbar-right-menu">
                            <li>Right Text</li>
                        </ul>
                    </nav>
                </section>
                <Highlight>
                    {'<nav>'}<br />
                    {'  <a class="navbar-title" href="URL">...</a>'}<br />
                    {'  <ul class="navbar-menu">'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ul>'}<br />
                    {'  <ul class="navbar-right-menu">'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ul>'}<br />
                    {'</nav>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Progress bar</h2>
                <article className="grid">
                    <section>
                        <p>35%</p>
                        <progress max="100" value="35"></progress>
                    </section>
                    <section>
                        <p>Indetermined</p>
                        <progress max="100"></progress>
                    </section>
                </article>
                <Highlight>
                    {'<progress max="..." value="..."></progress>'}
                </Highlight>
            </section>
        </article>
    );
}

export default Components;