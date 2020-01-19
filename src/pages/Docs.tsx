import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import GStarted from './docs/GStarted';
import Content from './docs/Content';
import Components from './docs/Components';
import Layout from './docs/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import New from './docs/New';

const Docs: React.FC = () => {
    return (
        <article className="fluid grid">
            <section id="docsMenu" className="transparent">
                <ul>
                    <li><Link to="/docs"><FontAwesomeIcon icon="laptop" /> Getting Started</Link></li>
                    <li><Link to="/docs/layout"><FontAwesomeIcon icon="layer-group" /> Layout</Link></li>
                    <li><Link to="/docs/content"><FontAwesomeIcon icon="box" /> Content</Link></li>
                    <li><Link to="/docs/components"><FontAwesomeIcon icon="boxes" /> Components</Link></li>
                    <li><Link to="/docs/new"><FontAwesomeIcon icon="exclamation" /> New in v2.0</Link></li>
                </ul>
            </section>
            <Switch>
                <Route path="/docs/layout" component={Layout} />
                <Route path="/docs/content" component={Content} />
                <Route path="/docs/components" component={Components} />
                <Route path="/docs/new" component={New} />
                <Route component={GStarted} />
            </Switch>
        </article>
    );
}

export default Docs;