import React from 'react';
import { mount } from 'enzyme';
import Pagination from './index';

describe('Pagination component', () => {

  let wrapper;

  before(() =>{
    wrapper = mount(<Pagination photoCount={100} />);
  });

  it('should be a in a list', () => {
    wrapper.find('ul').should.have.length(1);
  });

  it('should return 11 page links', () => {
    const listLength = wrapper.find('li').length;
    listLength.should.equal(11);
  });

});
