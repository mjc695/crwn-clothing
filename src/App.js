import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop'

import Homepage from './pages/homepage/homepage'

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
