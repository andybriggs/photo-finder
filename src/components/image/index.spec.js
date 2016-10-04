import React from 'react';
import { mount } from 'enzyme';
import Image from './index';

describe('Image component', () => {

  let wrapper;

  before(() => {
    wrapper = mount(<Image imgSrc="http://image.com/image.jpg" imgAlt="foo" imgStyle="bar" />);
  })

  it('should render a img', () => {
    wrapper.find('img').should.have.length(1);
  });

  it('should have a loading icon', () => {
    wrapper.find('.fa-circle-o-notch').should.have.length(1);
  });

  it('should have correct image source', () => {
    wrapper.find('img').node.getAttribute('src').should.equal('http://image.com/image.jpg');
  });

  it('should have correct alt tag', () => {
    wrapper.find('img').node.getAttribute('alt').should.equal('foo');
  });

  it('should be hidden by default', () => {
    wrapper.find('img').node.getAttribute('class').should.containEql('hide');
  });

});
