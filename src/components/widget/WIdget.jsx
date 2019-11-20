import React from 'react';

import { WidgetHeaderContainer } from '../../containers/widgetHeaderContainer';
import { WidgetBodyContainer } from '../../containers/widgetBodyContainer';

export const Widget = () => {
  return (
    <div>
      <WidgetHeaderContainer />
      <WidgetBodyContainer />
    </div>
  );
} 