import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';


import Header from './components/header/Header';
import Dash from './components/dashboard/Dash';
import Tabs from './components/tabs/Tabs';
import Content from './components/updates/Content';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/createPost/Dashboard';

import TokenState from './context/token/TokenState';


function App (props) {
  return (
    <TokenState>
      <BrowserRouter>
        <div className='container'>
          <Route exact={true} path='/' component={Header} />
          {/* <Route exact path='signIn' render={props => <SignIn />} /> */}
          <Route exact path='/execdashopboardive' render={props => <Dashboard {...props} />} />
          <Route exact path='/' component={Dash} />
          {/* <Route exact path='/' component={Tabs} /> */}
          <Route exact path='/' component={Content} />
          {/* <Route exact path='/' component={Banner} /> */}
          <Route exact path='/' component={Footer} />
          {/* <Route path='/surveys/new' component={} /> */}
        </div>
      </BrowserRouter>
    </TokenState>
  );
}

export default App;