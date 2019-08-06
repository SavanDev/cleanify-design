import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Docs from './pages/Docs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {
  return (
    <div id="app">
      <Navbar Version="0.8" />
      <Switch>
        <Route path="/docs" component={Docs} />
        <Route component={Home} />
      </Switch>
      <footer>
        <small>SavanDev - {new Date().getFullYear()}</small>
        <ol>
          <li><a href="https://github.com/SavanDev/cleanify-design/blob/master/LICENSE"><FontAwesomeIcon icon="gavel" /> MIT License</a></li>
          <li><a href="https://github.com/SavanDev/cleanify-design"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
          <li><a href="https://twitter.com/dylnavas36"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
        </ol>
      </footer>
    </div>
  );
}

export default App;
