import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from './index';
import sinon from 'sinon';

describe('Search component', () => {

  let wrapper;

  before(() =>{
    wrapper = mount(<Search />);
  });

  it('Should be in a form', () => {
    wrapper.find('form').should.have.length(1);
  });

  describe('Search input', () => {

    it('should be an html input', () => {
      wrapper.find('input').should.have.length(1);
    });

    it('should have an associated label', () => {
      wrapper.find('label').node.getAttribute('for').should.equal('search');
      wrapper.find('input').node.getAttribute('id').should.equal('search');
    });

    it('should have an empty string as a default value', () => {
      wrapper.find('input').node.value.should.equal('');
    });

    it('value should change when the state is updated', () => {
       wrapper.setState({ inputValue: 'Hammer time' });
       wrapper.find('input').node.value.should.equal('Hammer time');
     });

  });

  describe('Search button', () => {

    it.skip('calls handleSubmit', () => {
      // Not working
      const shallowWrapper = shallow(<Search />);
      const stub = sinon.stub(shallowWrapper.instance(), 'handleSubmit');
      shallowWrapper.find('button').simulate('click', { preventDefault() {} });
      stub.called.should.be.true();
    });

  });

});
