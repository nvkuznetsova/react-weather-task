import React from 'react';
import { Route, Switch } from 'react-router';

import { Navbar } from './components/Navbar';
import { ForecastContainer } from './containers/forecastContainer';

export const App = () => {
  return (
    <div className="container" data-marker="container">
      <header className="main-header">
        <Navbar />
      </header>
      <Switch>
        <Route exact path='/' component={ForecastContainer} />
        <Route path='/moscow/:id' component={ForecastContainer} />
        <Route path='/rostov-na-donu/:id' component={ForecastContainer} />
      </Switch>
    </div>
  );
}
