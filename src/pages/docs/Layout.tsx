import React from 'react';
import Highlight from 'react-highlight';

const Layout: React.FC = () => {
    return(
        <article>
            <section className="transparent">
                <h2>Bubble</h2>
                <div id="containerExample">
                </div>
                <Highlight>
                    {'<article>'}<br/>
                    {'  <section>'}<br/>
                    {'      ...'}<br/>
                    {'  </section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Bubble fluid</h2>
                <div id="containerFluidExample">
                </div>
                <Highlight>
                    {'<article class="fluid">'}<br/>
                    {'  <section>'}<br/>
                    {'      ...'}<br/>
                    {'  </section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Bubble transparent</h2>
                <div id="containerTransparentExample">
                </div>
                <Highlight>
                    {'<section class="transparent">'}<br/>
                    {'  ...'}<br/>
                    {'</section>'}
                </Highlight>
            </section>
            <section className="transparent">
                <h2>Grid system</h2>
                <div className="gridExample">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <Highlight>
                    {'<article class="grid">'}<br/>
                    {'  <section>...</section>'}<br/>
                    {'  <section>...</section>'}<br/>
                    {'  <section>...</section>'}<br/>
                    {'</article>'}
                </Highlight>
            </section>
        </article>
    );
}

export default Layout;