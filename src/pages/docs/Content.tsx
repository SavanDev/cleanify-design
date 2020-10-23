import React from 'react';
import Highlight from 'react-highlight';

const Content: React.FC = () => {
    return (
        <article>
            <section className="transparent">
                <h2>Navigation Header</h2>
                <h1 id="headerTitle">Example Text</h1>
                <Highlight>
                    {'<h1 id="headerTitle">...</h1>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Blockquotes</h2>
                <p>This is a <q>Inline blockquote</q></p>
                <blockquote>
                    Blockquote Text
                </blockquote>
                <Highlight>
                    {'<q>...</q>\n'}
                    {'<blockquote>\n'}
                    {'  ...\n'}
                    {'</blockquote>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Content centered text</h2>
                <section className="center">
                    <h2>Header centered</h2>
                    <p>And paragraphs too!</p>
                </section>
                <Highlight>
                    {'<article class="center">'}<br />
                    {'  <h1>...</h1>'}<br />
                    {'  <p>...</p>'}<br />
                    {'</article>'}<br />
                    <br />
                    {'<section class="center">'}<br />
                    {'  <h1>...</h1>'}<br />
                    {'  <p>...</p>'}<br />
                    {'</section>'}<br />
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Rounded Image</h2>
                <section className="center transparent">
                    <img className="rounded" src="https://via.placeholder.com/500x250.png" alt="Placeholder" />
                </section>
                <Highlight>
                    {'<img class="rounded" src="...">'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Theme system</h2>
                <p>Now you can change the Cleanify Design colors by creating a new <b>.css</b> file following these rules:</p>
                <Highlight>
                    {'/* Color base */'}<br />
                    {':root {'}<br />
                    {'  --color-primary: #color;'}<br />
                    {'  --color-secondary: #color;'}<br />
                    {'  --color-success: #color;'}<br />
                    {'  --color-danger: #color;'}<br />
                    {'  --color-warning: #color;'}<br />
                    {'  --color-info: #color;'}<br />
                    {'  --color-light: #color;'}<br />
                    {'  --color-dark: #color;'}<br />
                    {'  --color-muted: #color;'}<br />
                    {'  --color-lightgray: #color;'}<br />
                    {'}'}<br />
                    <br />
                    {'/* Theme specific colors */'}<br />
                    {'body {'}<br />
                    {'  --bubble: #color;'}<br />
                    {'  --background: #color;'}<br />
                    {'  --backgroundTransparent: #color;'}<br />
                    {'  --text: #color;'}<br />
                    {'  --list1: #color;'}<br />
                    {'  --list2: #color;'}<br />
                    {'  --list: #color;'}<br />
                    {'  --fields: #color;'}<br />
                    {'}'}<br />
                    <br />
                    {'/* Dark mode variant */'}<br />
                    {'body[dark="1"] {'}<br />
                    {'  --bubble: #color;'}<br />
                    {'  --background: #color;'}<br />
                    {'  --backgroundTransparent: #color;'}<br />
                    {'  --text: #color;'}<br />
                    {'  --list1: #color;'}<br />
                    {'  --list2: #color;'}<br />
                    {'  --list: #color;'}<br />
                    {'  --fields: #color;'}<br />
                    {'}'}<br />
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Typography</h2>
                <section>
                    <h1>h1 header</h1>
                    <h2>h2 header</h2>
                    <h3>h3 header</h3>
                    <h4>h4 header</h4>
                    <h5>h5 header</h5>
                    <h6>h6 header</h6>
                </section>
                <Highlight>
                    {'<h1>...</h1>'}<br />
                    {'<h2>...</h2>'}<br />
                    {'<h3>...</h3>'}<br />
                    {'<h4>...</h4>'}<br />
                    {'<h5>...</h5>'}<br />
                    {'<h6>...</h6>'}
                </Highlight>
            </section>
        </article>
    );
}

export default Content;