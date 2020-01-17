import React from 'react';
import Highlight from 'react-highlight';

const Content: React.FC = () => {
    return (
        <article>
            <section>
                <h2>Navigation Header</h2>
                <h1 id="headerTitle">Navigation header</h1>
                <Highlight className="codeSnippet html">
                    {'<h1 id="headerTitle">...</h1>'}
                </Highlight>
            </section>
            <section>
                <h2>Styled Title</h2>
            </section>
            <h1 className="styledTitle">New Cleanify 2.0!</h1>
            <section>
                <Highlight className="codeSnippet html">
                    {'<h1 class="styledTitle">...</h1>'}
                </Highlight>
                <p><b>NOTE:</b> Only works outside of tags "article".</p>
            </section>
            <section>
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