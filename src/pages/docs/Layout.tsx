import React from 'react';
import Highlight from 'react-highlight';

const Layout: React.FC = () => {
    return(
        <article>
            <section>
                <h2>Bubble</h2>
                <div id="containerExample">
                </div>
                <Highlight className="codeSnippet html">
                    {'<article>'}<br/>
                    {'  <section>'}<br/>
                    {'      ...'}<br/>
                    {'  </section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
            <section>
                <h2>Bubble fluid</h2>
                <div id="containerFluidExample">
                </div>
                <Highlight className="codeSnippet html">
                    {'<article class="fluid">'}<br/>
                    {'  <section>'}<br/>
                    {'      ...'}<br/>
                    {'  </section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
            <section>
                <h2>Grid system</h2>
                <p>Based in Bootstrap Grids principles</p>
                <div className="gridExample">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Highlight className="codeSnippet html">
                    {'<article class="grid">'}<br/>
                    {'  <section>...</section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
        </article>
    );
}

export default Layout;