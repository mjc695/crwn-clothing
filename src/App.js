import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop'
import Homepage from './pages/homepage/homepage'
import Header from './components/header/header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />

      </Switch>
    </div>
  );
}

export default App;
