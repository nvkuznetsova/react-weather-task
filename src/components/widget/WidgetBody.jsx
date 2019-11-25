import React from 'react';
import PropTypes from 'prop-types';

import { WidgetBodyItem } from './WidgetBodyItem';

export const WidgetBody = (props) => {
  return (
    <table className="widget-body">
      <tbody data-marker="widget-table">
      {props.widgetBodyData.map((item, index) => (
        <WidgetBodyItem key={index} title={item.title} value={item.value} mark={item.mark} data-marker="widget-table-item" />
      ))}
      </tbody>
    </table>
  );
}

WidgetBody.propTypes = {
  widgetBodyData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.number,
    mark: PropTypes.string,
  })).isRequired,
};