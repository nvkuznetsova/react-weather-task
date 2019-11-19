import React, { Component } from 'react';

import { Loader } from './Loader';

export class WidgetPage extends Component {
  componentDidMount() {
    this.getForecastByCityId();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getForecastByCityId();
    }
  }

  getForecastByCityId() {
    const spbId = 498817;
    this.props.getWeatherForecast(this.props.match.params.id || spbId);
  }
  
  render() {
    if (this.props.isLoading === true) {
      return(
        <Loader />
      )
    } else {
      return (
        <div>
          <h1>Weather forecast for {this.props.weatherForecast.name}</h1>
        </div>
      )
    }
  }
}