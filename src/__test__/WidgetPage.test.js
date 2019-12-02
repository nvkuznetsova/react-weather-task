import React from 'react';

import { shallow } from 'enzyme';

import { WidgetPage } from '../components/WidgetPage';
import { CITIES_NAMES } from '../constants/constants';

describe('WidgetPage', () => {
  let component;
  const props = { 
    isLoading: true,
    getWeatherForecast: jest.fn(),
    match: {params: { cityName: CITIES_NAMES.spb}},
  };

  beforeAll(() => {
    component = shallow(<WidgetPage {...props}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component.instance()).toBeTruthy();
  });

  it('should call send weather request when component mount', () => {
    const cityId = 498817;
    const getForecastByCityId = jest.spyOn(component.instance(), 'getForecastByCityId');
    component.instance().componentDidMount();
    expect(getForecastByCityId).toHaveBeenCalled();
    expect(props.getWeatherForecast).toHaveBeenCalledWith(cityId);
  });

  it('should call send weather request when component update', () => {
    const prevProps = {
      ...props,
      match: {params: { cityName: CITIES_NAMES.moscow}}
    }
    const cityId = 498817;
    const getForecastByCityId = jest.spyOn(component.instance(), 'getForecastByCityId');
    component.instance().componentDidUpdate(prevProps);
    expect(getForecastByCityId).toHaveBeenCalled();
    expect(getForecastByCityId).toHaveBeenCalledTimes(1);
    expect(props.getWeatherForecast).toHaveBeenCalledWith(cityId);
  });

  describe('WidgetPage Redirect', () => {
    const redirectProps = {
      ...props,
      match: {params: { cityName: 'lalala'}},
    }

    beforeEach(() => {
      component = shallow(<WidgetPage {...redirectProps}/>);
    });

    it('should match redirect shapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should change state and props when redirect', () => {
      expect(component.state().redirect).toBe(true);
      expect(component.props().to).toBe('page-not-found');
    });

    it('should redirect if incorrect URL', () => {
      expect(component.find('[data-marker="loader"]')).toHaveLength(0);
      expect(component.find('[data-marker="error"]')).toHaveLength(0);
      expect(component.find('[data-marker="weather-widget"]')).toHaveLength(0);
    });
  });

  describe('WidgetPage Loader', () => {
    const loaderProps = {...props};

    beforeEach(() => {
      component = shallow(<WidgetPage {...loaderProps}/>);
    });

    it('should match loading shapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should display loader', () => {
      expect(component.find('[data-marker="loader"]')).toHaveLength(1);
      expect(component.find('[data-marker="error"]')).toHaveLength(0);
      expect(component.find('[data-marker="weather-widget"]')).toHaveLength(0);
    });
  });

  describe('WidgetPage Error', () => {
    const errorProps = {
      ...props,
      isLoading: false,
      error: { message: 'error' },
    };

    beforeEach(() => {
      component = shallow(<WidgetPage {...errorProps}/>);
    });

    it('should match error snapshot', ()=> {
      expect(component).toMatchSnapshot();
    });

    it('should display error', () => {
      expect(component.find('[data-marker="loader"]')).toHaveLength(0);
      expect(component.find('[data-marker="error"]')).toHaveLength(1);
      expect(component.find('[data-marker="weather-widget"]')).toHaveLength(0);
    });
  });

  describe('WidgetPage Widget', () => {
    const widgetProps = { 
      ...props,
      isLoading: false,
      error: { message: '' },
    };
    
    beforeEach(() => {
      component = shallow(<WidgetPage {...widgetProps}/>);
    });

    it('should match widget snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should display widget', () => {
      expect(component.find('[data-marker="loader"]')).toHaveLength(0);
      expect(component.find('[data-marker="error"]')).toHaveLength(0);
      expect(component.find('[data-marker="weather-widget"]')).toHaveLength(1);
    });

    it('should contain header', () => {
      const title = component.instance().mainTitle.toUpperCase();
      expect(component.find('[data-marker="widget-title"]').text()).toBe(title);
    });
  });

});
