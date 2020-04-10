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