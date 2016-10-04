import React from 'react';
import { mount } from 'enzyme';
import Gallery from './index';

describe('Gallery component', () => {

  let wrapper,
  mockList

  before(() => {
    mockList = [{ photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" },
      { photoIndex:0, title:"title", url:"http://foo.bar.com/boo.jpg" }
    ];
    wrapper = mount (<Gallery photoList={mockList} page={1} loading={false} />);
  });

  it('should be a in a list', () => {
    wrapper.find('ul').should.have.length(1);
  });

  it('should have first 15 list items', () => {
    mockList.should.have.length(16);
    wrapper.find('li').should.have.length(15);
  });

  it('should have property of page 1', () => {
    wrapper.props().page.should.equal(1);
  });

  it('loading prop should be false', () => {
    wrapper.props().loading.should.equal(false);
  });

});
