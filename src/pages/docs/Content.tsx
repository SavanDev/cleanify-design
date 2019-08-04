import React from 'react';
import Highlight from 'react-highlight';

const Content: React.FC = () => {
    return(
        <section>
            <article>
                <h2>Typography</h2>
                <article>
                    <h1>h1 header</h1>
                    <h2>h2 header</h2>
                    <h3>h3 header</h3>
                    <h4>h4 header</h4>
                    <h5>h5 header</h5>
                    <h6>h6 header</h6>
                </article>
                <Highlight className="codeSnippet html">
                    {'<h1>...</h1>'}<br/>
                    {'<h2>...</h2>'}<br/>
                    {'<h3>...</h3>'}<br/>
                    {'<h4>...</h4>'}<br/>
                    {'<h5>...</h5>'}<br/>
                    {'<h6>...</h6>'}
                </Highlight>
            </article>
            <article>
                <h2>Dark Mode</h2>
                <p>Any tag with the id "<b>darkToggle</b>" when pressed will alternate between dark and light mode.</p>
                <p>In the <b>right-top</b> you have a example of this.</p>
                <Highlight className="codeSnippet html">
                    {'<... id="darkToggle"></...>'}
                </Highlight>
            </article>
        </section>
    );
}

export default Content;