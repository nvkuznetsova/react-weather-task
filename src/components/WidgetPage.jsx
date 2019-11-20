import React, { Component } from 'react';

import { Loader } from './Loader';
import { Widget } from './widget/WIdget';
import { Error } from './Error';
import { CITIES_IDS, CITIES_NAMES } from '../constants/constants';

export class WidgetPage extends Component {
  constructor(props){
    super(props);
    this.mainTitle = 'Weather forecast';
  };
  componentDidMount() {
    this.getForecastByCityId();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.cityName !== prevProps.match.params.cityName) {
      this.getForecastByCityId();
    }
  }

  getForecastByCityId() {
    const name = this.props.match.params.cityName;
    const id = (name === CITIES_NAMES.spb) ? CITIES_IDS.spb :
               (name === CITIES_NAMES.moscow) ? CITIES_IDS.moscow : CITIES_IDS.rostov;
    this.props.getWeatherForecast(id);
  }
  
  render() {
    if (this.props.isLoading === true) {
      return (
        <Loader data-marker="loader"/>
      )
    }
    if (this.props.error.message) {
      return (<Error message={this.props.error.message} data-marker="error" />)
    }
    return (
      <div data-marker="weather-widget">
        <h1 className="main-title">{this.mainTitle.toUpperCase()}</h1>
        <Widget weather={this.props.widgetHeaderData} />
      </div>
    )
  }
}
