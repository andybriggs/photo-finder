import App from '../';

describe('Home page', () => {
  it('Should have a page heading', () => {
    expect(App.toContain('h1'));
  });
});
