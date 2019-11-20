import React from 'react';

import { shallow } from 'enzyme';

import { Navbar } from '../components/Navbar';

it('should contain 3 menu items', () => {
  const nav = shallow(<Navbar />)
  expect(nav.find('[data-marker="menu-item"]').length).toBe(3);
});