import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import GStarted from './docs/GStarted';
import Content from './docs/Content';
import Components from './docs/Components';
import Layout from './docs/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Docs: React.FC = () => {
    return(
        <article>
            <ol>
                <li><Link to ={process.env.PUBLIC_URL + "/docs"}><FontAwesomeIcon icon="laptop" /> Getting Started</Link></li>
                <li><Link to ={process.env.PUBLIC_URL + "/docs/layout"}><FontAwesomeIcon icon="layer-group" /> Layout</Link></li>
                <li><Link to ={process.env.PUBLIC_URL + "/docs/content"}><FontAwesomeIcon icon="box" /> Content</Link></li>
                <li><Link to ={process.env.PUBLIC_URL + "/docs/components"}><FontAwesomeIcon icon="boxes" /> Components</Link></li>
            </ol>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/docs/layout"} component={Layout} />
                <Route path={process.env.PUBLIC_URL + "/docs/content"} component={Content} />
                <Route path={process.env.PUBLIC_URL + "/docs/components"} component={Components} />
                <Route component={GStarted} />
            </Switch>
        </article>
    );
}

export default Docs;