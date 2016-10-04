import React from 'react';
import { mount } from 'enzyme';
import Image from './index';

describe('Image component', () => {

  let wrapper;

  before(() => {
    wrapper = mount(<Image />);
  })

  it.skip('should have a loading icon', () => {
    wrapper.find('.circle-o-notch').should.have.length(1);
  });

  it.skip('should have a image with a src', () => {

  });

});
