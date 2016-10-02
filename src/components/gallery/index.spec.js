import React from 'react';
import { mount } from 'enzyme';
import Gallery from './index';

describe('Gallery component', () => {

  let wrapper,
  mockList

  before(() =>{
    mockList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ,'o', 'p'];
    wrapper = mount(<Gallery photoList={mockList}/>);
  });

  it('Should be a in a list', () => {
    wrapper.find('ul').should.have.length(1);
  });

  it('Should have first 15 list items', () => {
    mockList.should.have.length(16);
    wrapper.find('li').should.have.length(16);
  });

});
