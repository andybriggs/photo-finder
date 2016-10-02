import React from 'react';
import { mount } from 'enzyme';
import Gallery from './index';

describe('Gallery component', () => {

  let wrapper;

  before(() =>{
    wrapper = mount(<Gallery photoList={['foo', 'bar']}/>);
  });

  it('Should be a in a list', () => {
    wrapper.find('ul').should.have.length(1);
  });

  it('Should have two list items', () => {
    wrapper.find('li').should.have.length(2);
  });

});
