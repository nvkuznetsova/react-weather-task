import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { Navbar } from './components/Navbar';
import { ForecastContainer } from './containers/forecastContainer';

import { CITIES_NAMES } from './constants/constants';

export const App = () => (
    <div className="container" data-marker="container">
      <header className="main-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/:cityName' component={ForecastContainer} />
        <Route path='/:cityName' component={ForecastContainer} />
        <Route path='/:cityName' component={ForecastContainer} />
        <Route exact path="/" render={() => (<Redirect to={`${CITIES_NAMES.spb}`} />)} /> 
      </Switch>
    </div>
  );
