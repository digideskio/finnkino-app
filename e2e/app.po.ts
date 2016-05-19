export class FinnkinoMoviesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('finnkino-movies-app h1')).getText();
  }
}
