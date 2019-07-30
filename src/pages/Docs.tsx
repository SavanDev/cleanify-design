import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import GStarted from './docs/GStarted';
import Content from './docs/Content';
import Components from './docs/Components';
import Layout from './docs/Layout';

const Docs: React.FC = () => {
    return(
        <section>
            <ol>
                <li><Link to="/docs">Getting Started</Link></li>
                <li><Link to="/docs/layout">Layout</Link></li>
                <li><Link to="/docs/content">Content</Link></li>
                <li><Link to="/docs/components">Components</Link></li>
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