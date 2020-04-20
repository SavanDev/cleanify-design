import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import Highlight from 'react-highlight';

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
                        <h1 id="headerTitle">Download Cleanify Design</h1>
                        <section>
                            <h2>Latest version</h2>
                            <article className="grid">
                                <section className="transparent">
                                    <h4>{version.name}</h4>
                                    <pre style={{ margin: 10 }}>{version.body}</pre>
                                </section>
                                <section className="transparent">
                                    <p>Download from GitHub</p>
                                    <ul>
                                        <li><a href={version.assets[0].browser_download_url}><FontAwesomeIcon icon={faGithub} /> Download</a></li>
                                        <li><a href={version.zipball_url}><FontAwesomeIcon icon={faArchive} /> Source code (.zip)</a></li>
                                    </ul>
                                    <p>Or download from NPM</p>
                                    <Highlight>
                                        {'$ npm install cleanify-design'}
                                    </Highlight>
                                </section>
                            </article>
                            <h3>Older versions</h3>
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

    return (
        <div id="releases">
            <article>
                <h1 id="headerTitle">Loading...</h1>
            </article>
        </div>
    );
}

export default Download;