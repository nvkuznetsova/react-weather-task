import React from 'react';
import PropTypes from 'prop-types';

export const WidgetBodyItem = (props) => {
  return (
    <tr className="widget-table-row">
      <td className="widget-body-item widget-item-title">{props.title.toUpperCase()}</td>
      <td className="widget-body-item">{props.value} {props.mark}</td>
    </tr>
  );
}

WidgetBodyItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  mark: PropTypes.string,
};