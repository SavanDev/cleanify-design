import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import GStarted from './docs/GStarted';
import Content from './docs/Content';
import Components from './docs/Components';
import Layout from './docs/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Docs: React.FC = () => {
    return(
        <section>
            <ol>
                <li><Link to="/docs"><FontAwesomeIcon icon="laptop" /> Getting Started</Link></li>
                <li><Link to="/docs/layout"><FontAwesomeIcon icon="layer-group" /> Layout</Link></li>
                <li><Link to="/docs/content"><FontAwesomeIcon icon="box" /> Content</Link></li>
                <li><Link to="/docs/components"><FontAwesomeIcon icon="boxes" /> Components</Link></li>
            </ol>
            <Switch>
                <Route path="/docs/layout" component={Layout} />
                <Route path="/docs/content" component={Content} />
                <Route path="/docs/components" component={Components} />
                <Route component={GStarted} />
            </Switch>
        </section>
    );
}

export default Docs;