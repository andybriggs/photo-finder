import React from 'react';
import { mount } from 'enzyme';
import Header from './index';

describe('Header component', () => {

  it('Should have a heading', () => {
    const wrapper = mount(<Header />);
    wrapper.find('h1').should.have.length(1);
  });

});
