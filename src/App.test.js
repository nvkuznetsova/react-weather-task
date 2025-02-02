import React from 'react';

import { shallow } from 'enzyme';

import { App } from './App';


it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app.find('[data-marker="container"]')).toHaveLength(1);
});
