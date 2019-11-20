import React from 'react';

export const WidgetBodyItem = (props) => {
  return (
    <tr className="widget-table-row">
      <td className="widget-body-item widget-item-title">{props.title.toUpperCase()}</td>
      <td className="widget-body-item">{props.value} {props.mark}</td>
    </tr>
  );
}