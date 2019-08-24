import React from 'react';
import ReactDOM from 'react-dom';

const Download: React.FC = () => {
    let url = "https://api.github.com/repos/SavanDev/cleanify-design/releases";

    (async () => {
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                let version = json[0];
                ReactDOM.render(
                <article>
                    <h4>{version.name}</h4>
                    <pre style={{ margin: 10 }}>{version.body}</pre>
                    <ol>
                        <li><a href={version.html_url}>Download</a></li>
                        <li><a href={version.zipball_url}>Source code (.zip)</a></li>
                    </ol>
                </article>,
                document.getElementById("latest"));
            });
    })();

    return(
        <section>
            <h1 id="headerTitle">Download <b>Cleanify Design</b></h1>
            <article>
                <h2>Latest version</h2>
                <div id="latest">
                    <h4>Loading...</h4>
                </div>
            </article>
        </section>
    );
}

export default Download;