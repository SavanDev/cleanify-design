import React from "react";
import OldCleanify from "../img/cleanify-old.png";
import NewCleanify from "../img/CDExample.png";

const Info: React.FC = () => {
    return (
        <article>
            <h1 id="headerTitle">About Cleanify Design</h1>
            <section className="transparent">
                <h3>The Beginning of Cleanify</h3>
                <p>Cleanify Design was emerged, in a start, from the need to have a framework that mix <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> and <a href="https://www.samsung.com/global/galaxy/apps/one-ui/" target="_blank" rel="noopener noreferrer">One UI</a> style.</p>
                <p>As I don´t find anything similar to this... I decide to make my own framework.</p>
                <p>The first time, Cleanify was going to be a fork of bootstrap adapted for look as OneUI, but that idea was going to last shortly.</p>
                <article className="grid">
                    <section className="transparent">
                        <p>Then, the idea came out... Why not make my own framework from scratch?</p>
                        <p>And, here we go... An HTML, CSS & JS framework made from scratch based on both styles that I needed.</p>
                        <p>The first version was released and Cleanify Design was saw the light for first time.</p>
                    </section>
                    <section className="transparent">
                        <img src={OldCleanify} alt="Example" className="rounded" width="100%" />
                    </section>
                </article>
            </section>
            <section className="transparent">
                <h3>The Present of Cleanify</h3>
                <p>Cleanify was released and can be use for the public, alright.</p>
                <p>But with past of time, between bugs that were found and a need of update the style... The framework was needed modify.</p>
                <article className="grid">
                    <section className="transparent">
                        <p>With this in mind, the big second version was started developed.</p>
                        <p>This time many things were modified. From the organization of GitHub repository until a new and improved style for the framework.</p>
                        <p>The second version is here and you can watch all the new features and changes that I was made from the first version. As the new banners!</p>
                    </section>
                    <section className="transparent">
                        <img src={NewCleanify} alt="Example" className="rounded" width="100%" />
                    </section>
                </article>
            </section>
        </article>
    );
}

export default Info;