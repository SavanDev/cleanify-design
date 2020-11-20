import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import Highlight from 'react-highlight';

let getVersions = (json : any, lts : boolean, limit : number) => json.slice(0, limit).map((element: any) => {
        if (lts ? element.tag_name.includes("LTS") : !element.tag_name.includes("LTS"))
            return (
                <li><a href={element.html_url} title={element.body}>{element.name}</a></li>
            );
        else
            return null;
});

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
                            <article className="grid">
                                <section className="transparent">
                                    <h2>Latest version</h2>
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
                            <article className="grid">
                                <section className="transparent">
                                    <h3>LTS version</h3>
                                    <ul id="older">
                                        {getVersions(json, true, 4)}
                                    </ul>
                                </section>
                                <section className="transparent">
                                    <h3>Older versions</h3>
                                    <ul id="older">
                                        {getVersions(json, false, 4)}
                                        <li><a href="https://github.com/SavanDev/cleanify-design/releases">Show more versions...</a></li>
                                    </ul>
                                </section>
                            </article>
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