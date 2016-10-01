import React from 'react';
import { mount } from 'enzyme';
import Search from './index';

describe('Search component', () => {

  let searchDom;

  before(() =>{
    searchDom = mount(<Search />);
  });

  describe('Search input', () => {

    it('Should be an html input', () => {
      searchDom.find('input').should.have.length(1);
    });

    it('Should have an associated label', () => {
      searchDom.find('label').node.getAttribute('for').should.equal('search');
      searchDom.find('input').node.getAttribute('id').should.equal('search');
    });

    it('Should have an empty string as a default value', () => {
      searchDom.find('input').node.value.should.equal('');
    });

    it('Value should change when the state is updated', () => {
       searchDom.setState({ value: 'Hammer time' });
       searchDom.find('input').node.value.should.equal('Hammer time');
     });

  });

});
