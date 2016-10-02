import React from 'react';
import { mount } from 'enzyme';
import Viewer from './index';

describe('Viewer component', () => {

  let wrapper;

  before(() =>{
    wrapper = mount(<Viewer url="https://farm6.staticflickr.com/5579/29763197130_29a06a7f75.jpg"/>);
  });

  it('should have an image', () => {
    wrapper.find('img').should.have.length(1);
  });

});
