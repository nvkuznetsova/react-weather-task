import React from 'react';

import { WidgetBodyItem } from './WidgetBodyItem';

export const WidgetBody = (props) => {
  return (
    <table className="widget-body">
      <tbody>
      {props.widgetBodyData.map((item, index) => (
        <WidgetBodyItem key={index} title={item.title} value={item.value} mark={item.mark} />
      ))}
      </tbody>
    </table>
  );
}