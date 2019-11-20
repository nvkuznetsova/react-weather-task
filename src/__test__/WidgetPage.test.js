import React from 'react';

import { shallow } from 'enzyme';

import { WidgetPage } from '../components/WidgetPage';

describe('WidgetPage', () => {

  it('should display loader', () => {
    const props = { isLoading: true, getWeatherForecast: jest.fn(), match: {params: 0}};
    const component = shallow(<WidgetPage {...props}/>);
    expect(component.find('[data-marker="loader"]')).toHaveLength(1);
    expect(component.find('[data-marker="error"]')).toHaveLength(0);
    expect(component.find('[data-marker="weather-widget"]')).toHaveLength(0);
  });

  it('should display error', () => {
    const props = { isLoading: false, getWeatherForecast: jest.fn(), match: {params: 0}, error: { message: 'error' }};
    const component = shallow(<WidgetPage {...props}/>);
    expect(component.find('[data-marker="loader"]')).toHaveLength(0);
    expect(component.find('[data-marker="error"]')).toHaveLength(1);
    expect(component.find('[data-marker="weather-widget"]')).toHaveLength(0);
  });

  it('should display widget', () => {
    const props = { isLoading: false, getWeatherForecast: jest.fn(), match: {params: 0}, error: { message: '' }};
    const component = shallow(<WidgetPage {...props}/>);
    expect(component.find('[data-marker="loader"]')).toHaveLength(0);
    expect(component.find('[data-marker="error"]')).toHaveLength(0);
    expect(component.find('[data-marker="weather-widget"]')).toHaveLength(1);
  });

  it('should call send weather request', () => {
    const props = { isLoading: true, getWeatherForecast: jest.fn(), match: {params: 0}, error: { message: '' }};
    const component = shallow(<WidgetPage {...props}/>);
    component.instance().componentDidMount();
    expect(props.getWeatherForecast).toBeCalled();
  });

});
