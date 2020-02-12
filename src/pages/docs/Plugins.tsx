import React from "react";
import Highlight from "react-highlight";

const Plugins: React.FC = () => {
    return (
        <article>
            <section className="transparent">
                <h2>Material Icons (Fix)</h2>
                <p>
                    <i className="material-icons">done</i>
                    Now Material Icons shows properly in paragraphs and navbar.
                </p>
                <Highlight>
                    {'<i class="material-icons">'}<br />
                    {'  icon_name'}<br />
                    {'</i>'}
                </Highlight>
                <p>
                    <i className="material-icons">warning</i>
                    <b>NOTE</b>: Material Icons isn't included in Cleanify.
                </p>
            </section>
            <section className="transparent">
                <h2>React Implementation</h2>
                <p>Cleanify works in React pages, even this documentation was written in React.</p>
            </section>
            <section className="transparent">
                <h2>React Highlight</h2>
                <p>Now Cleanify have a custom style for code highlights with "react-highlight".</p>
                <Highlight>
                    {'<Highlight>'}<br />
                    {'  ...'}<br />
                    {'</Highlight>'}
                </Highlight>
            </section>
        </article>
    );
};

export default Plugins;