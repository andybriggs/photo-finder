import React from 'react';
import { mount } from 'enzyme';
import Search from './index';
import sinon from 'sinon';

describe('Search component', () => {

  let searchDom;

  before(() =>{
    searchDom = mount(<Search />);
  });


  it('Should be in a form', () => {
    searchDom.find('form').should.have.length(1);
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

  describe('Search button', () => {
    it('Should return the input value', () => {
      const onClick = sinon.spy();
      searchDom.find('button').simulate('click');
      const inputValue = searchDom.find('input').node.value;
      console.log(onClick);
    });

  });

});
