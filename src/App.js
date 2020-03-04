import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage'

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
