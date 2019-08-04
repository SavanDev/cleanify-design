import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Docs from './pages/Docs';

const App: React.FC = () => {
  return (
    <div id="app">
      <Navbar Version="0.8 (WIP)" />
      <Switch>
        <Route path="/docs" component={Docs} />
        <Route component={Home} />
      </Switch>
      <footer>
        <small>SavanDev - {new Date().getFullYear()} | <a href="https://github.com/SavanDev/cleanify-design">GitHub</a></small>
      </footer>
    </div>
  );
}

export default App;
