import { FinnkinoMoviesPage } from './app.po';

describe('finnkino-movies App', function() {
  let page: FinnkinoMoviesPage;

  beforeEach(() => {
    page = new FinnkinoMoviesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('finnkino-movies works!');
  });
});
