import React, { Component } from 'react';

import { Loader } from './Loader';
import { Widget } from './widget/WIdget';
import { Error } from './Error';
import { SPB_ID } from '../constants/constants';

export class WidgetPage extends Component {
  constructor(props){
    super(props);
    this.mainTitle = 'Weather forecast';
  };
  componentDidMount() {
    this.getForecastByCityId();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getForecastByCityId();
    }
  }

  getForecastByCityId() {
    this.props.getWeatherForecast(this.props.match.params.id || SPB_ID);
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
