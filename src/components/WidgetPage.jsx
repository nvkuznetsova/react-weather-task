import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loader } from './Loader';
import { Widget } from './widget/WIdget';
import { Error } from './Error';
import { CITIES_IDS, CITIES_NAMES } from '../constants/constants';

export class WidgetPage extends Component {
  constructor(props){
    super(props);
    this.mainTitle = 'Weather forecast';
    this.state = {
      redirect: false,
    }
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
               (name === CITIES_NAMES.moscow) ? CITIES_IDS.moscow : 
               (name === CITIES_NAMES.rostov) ? CITIES_IDS.rostov : null;
    if (!id) {
      this.setState({redirect: true});
      return;
    } 
    this.props.getWeatherForecast(id);
  }
  
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='page-not-found' />
      )
    }
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
        <Widget />
      </div>
    )
  }
}

WidgetPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  getWeatherForecast: PropTypes.func.isRequired,
};
