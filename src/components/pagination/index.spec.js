import React from 'react';
import { mount } from 'enzyme';
import Pagination from './index';

describe('Pagination component', () => {

  let wrapper;

  before(() =>{
    wrapper = mount(<Pagination photoCount={100} />);
  });

  it('Should be a in a list', () => {
    wrapper.find('ul').should.have.length(1);
  });

  it('Should return 7 page links', () => {
    wrapper.find('li').should.have.length(7);
  });

});
