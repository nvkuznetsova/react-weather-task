import React from 'react';
import PropTypes from 'prop-types';

export const WidgetHeader = (props) => {
  return (
    <div className="widget-header">
      <h2 className="widget-header-item city-title">Weather in {props.widgetHeaderData.name}</h2>
      <h3 className="widget-header-item">Temp: {Math.round(props.widgetHeaderData.temp)} &deg;C</h3>
      <p className="widget-header-item">{props.widgetHeaderData.main}: {props.widgetHeaderData.description}</p>
    </div>
  );
}

WidgetHeader.propTypes = {
  widgetHeaderData: PropTypes.shape({
    name: PropTypes.string,
    temp: PropTypes.number,
    main: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};