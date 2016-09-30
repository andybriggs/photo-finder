import App from '../src/';

describe('Home page', () => {
  it('Should have a page heading', () => {
    expect(App.toContain('h1'));
  });
});
