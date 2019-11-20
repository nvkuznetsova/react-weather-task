import React from 'react';

import { shallow } from 'enzyme';

import { WidgetBody } from '../components/widget/WidgetBody';

describe('WidgetBody', () => {
  const props = {
    widgetBodyData: [
      {
        title: "temperature",
        value: 3,
        mark: 'C',
      },
      {
        title: "pressure",
        value: 700,
        mark: 'hpa',
      },
      {
        title: "humidity",
        value: 60,
        mark: '%',
      },
    ]
  };
  const component = shallow(<WidgetBody {...props} />);

  it('should create', () => { 
    expect(component.find('[data-marker="widget-table"]')).toHaveLength(1);
  });

  it('should display all weather props', () => {
    expect(component.find('[data-marker="widget-table-item"]')).toHaveLength(3);
  });
});