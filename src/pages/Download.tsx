import React from 'react';
import ReactDOM from 'react-dom';

const Download: React.FC = () => {
    let url = "https://api.github.com/repos/SavanDev/cleanify-design/releases";

    (async () => {
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                let version = json[0];
                json.shift();
                ReactDOM.render(
                    <article>
                        <h1 id="headerTitle">Download <b>Cleanify Design</b></h1>
                        <section>
                            <h2>Latest version</h2>
                            <section>
                                <h4>{version.name}</h4>
                                <pre style={{ margin: 10 }}>{version.body}</pre>
                                <ol>
                                    <li><a href={version.html_url}>Download</a></li>
                                    <li><a href={version.zipball_url}>Source code (.zip)</a></li>
                                </ol>
                                <p>Or download from NPM: <b>npm install cleanify-design</b></p>
                            </section>
                            <h3>Other versions</h3>
                            <ul id="older">
                                {json.map((element: any) => 
                                    <li><a href={element.html_url} title={element.body}>{element.name}</a></li>
                                    )}
                            </ul>
                        </section>
                    </article>,
                    document.getElementById("releases"));
            });
    })();

    return(
        <div id="releases">
            <article>
                <h1 id="headerTitle">Loading...</h1>
            </article>
        </div>
    );
}

export default Download;