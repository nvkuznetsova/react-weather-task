import React from 'react';
import { Route, Switch } from 'react-router';

import { Navbar } from './components/Navbar';
import { WidgetPage } from './components/WidgetPage';

export const App = () => {
  return (
    <div className="container">
      <header className="main-header">
        <Navbar />
      </header>
      <h1>Weather Forecast</h1>
      <Switch>
        <Route exact path='/' component={WidgetPage} />
        <Route path='/moscow/:id' component={WidgetPage} />
        <Route path='/rostov-na-donu/:id' component={WidgetPage} />
      </Switch>

    </div>
  );
}
