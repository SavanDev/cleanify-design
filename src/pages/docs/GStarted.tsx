import React from 'react';
import Highlight from 'react-highlight';

const GStarted: React.FC = () => {
    return(
        <section>
            <article>
                <h2>Download latest version</h2>
                <hr/>
                <h4>Version 0.7: <a href="https://github.com/SavanDev/cleanify-design/releases">GitHub Releases</a></h4>
                <hr/>
                <p>You can download the latest version from GitHub.</p>
            </article>
            <article>
                <h2>Let's start!</h2>
                <p>Once the files have been downloaded, the directory should look like this.</p>
                <article>
                    <p>website</p>
                    <p>--- css</p>
                    <p>------ cleanify.min.css</p>
                    <p>------ cleanify-dark.min.css</p>
                    <p>--- js</p>
                    <p>------ cleanify.min.js</p>
                    <p>--- index.html</p>
                </article>
                <h4>Starter template</h4>
                <Highlight className="codeSnippet html">
                    {'<!DOCTYPE html>'}<br/>
                    {'<html lang="en">'}<br/>
                    {'<head>'}<br/>
                    {'  <meta charset="UTF-8"/>'}<br/>
                    {'  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>'}<br/>
                    {'  <link id="cleanifyCss" rel="stylesheet" href="./css/cleanify.css">'}<br/>
                    {'  <title>Cleanify Example</title>'}<br/>
                    {'</head>'}<br/>
                    {'<body>'}<br/>
                    {'  ...'}<br/>
                    {'  <script src="./js/cleanify.min.js"></script>'}<br/>
                    {'</body>'}<br/>
                    {'</html>'}<br/>
                </Highlight>
            </article>
        </section>
    );
}

export default GStarted;