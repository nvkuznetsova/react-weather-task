import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { Navbar } from './components/Navbar';
import { ForecastContainer } from './containers/forecastContainer';
import { PageNotFound } from './components/PageNotFound';

import { CITIES_NAMES } from './constants/constants';

export const App = () => (
    <div className="container" data-marker="container">
      <header className="main-header">
        <Navbar />
      </header>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound}/>
        <Route exact path="/:cityName" component={ForecastContainer}/>
        <Route exact path="/" render={() => (<Redirect to={`${CITIES_NAMES.spb}`} />)} /> 
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  );
