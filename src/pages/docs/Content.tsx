import React from 'react';
import Highlight from 'react-highlight';

const Content: React.FC = () => {
    return (
        <article>
            <section className="transparent">
                <h2>Navigation Header</h2>
                <h1 id="headerTitle">Example Text</h1>
                <Highlight className="codeSnippet html">
                    {'<h1 id="headerTitle">...</h1>'}
                </Highlight>
            </section>
            <hr/>
            <section className="transparent">
                <h1>Banners</h1>
                <h1 className="blueBanner">Cleanify 2.0!</h1>
                <h1 className="redBanner">In red too!</h1>
                <Highlight className="codeSnippet html">
                    {'<h1 class="blueBanner/redBanner">...</h1>'}
                </Highlight>
                <p><b>NOTE:</b> Not work in normal "section".</p>
            </section>
            <hr/>
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
                <Highlight className="codeSnippet html">
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