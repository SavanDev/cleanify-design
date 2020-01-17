import React from 'react';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

const GStarted: React.FC = () => {
    return (
        <article>
            <section>
                <h2>Let's start!</h2>
                <p>Once the files have been <Link to="/download">downloaded</Link>, the directory should look like this.</p>
                <section>
                    <pre style={{ margin: 5 }}>
                        {'website'}<br/>
                        {'--> css'}<br/>
                        {'-----> cleanify.css'}<br/>
                        {'--> js'}<br/>
                        {'-----> cleanify.js'}<br/>
                        {'--> index.html'}
                    </pre>
                </section>
                <h4>Starter template</h4>
                <Highlight className="codeSnippet html">
                    {'<!DOCTYPE html>'}<br />
                    {'<html lang="en">'}<br />
                    {'<head>'}<br />
                    {'  <meta charset="UTF-8"/>'}<br />
                    {'  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>'}<br />
                    {'  <link rel="stylesheet" href="./css/cleanify.css">'}<br />
                    {'  <title>Cleanify Example</title>'}<br />
                    {'</head>'}<br />
                    {'<body>'}<br />
                    {'  ...'}<br />
                    {'  <script src="./js/cleanify.min.js"></script>'}<br />
                    {'</body>'}<br />
                    {'</html>'}<br />
                </Highlight>
            </section>
        </article>
    );
}

export default GStarted;