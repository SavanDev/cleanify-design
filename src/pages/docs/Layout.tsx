import React from 'react';
import Highlight from 'react-highlight';

const Layout: React.FC = () => {
    return(
        <section>
            <article>
                <h2>Bubble</h2>
                <div id="containerExample">
                </div>
                <Highlight className="codeSnippet html">
                    {'<section>'}<br/>
                    {'  <article>'}<br/>
                    {'      ...'}<br/>
                    {'  </article>'}<br/>
                    {'</section>'}
                </Highlight>
            </article>
            <article>
                <h2>Bubble fluid</h2>
                <div id="containerFluidExample">
                </div>
                <Highlight className="codeSnippet html">
                    {'<section class="fluid">'}<br/>
                    {'  <article>'}<br/>
                    {'      ...'}<br/>
                    {'  </article>'}<br/>
                    {'</section>'}
                </Highlight>
            </article>
            <article>
                <h2>Grid system</h2>
                <p>Based in Bootstrap Grids principles</p>
                <div className="gridExample">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Highlight className="codeSnippet html">
                    {'<section class="grid">'}<br/>
                    {'  <article>...</article>'}<br/>
                    {'</section>'}
                </Highlight>
            </article>
        </section>
    );
}

export default Layout;