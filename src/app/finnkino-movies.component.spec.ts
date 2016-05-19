import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FinnkinoMoviesAppComponent } from '../app/finnkino-movies.component';

beforeEachProviders(() => [FinnkinoMoviesAppComponent]);

describe('App: FinnkinoMovies', () => {
  it('should create the app',
      inject([FinnkinoMoviesAppComponent], (app: FinnkinoMoviesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'finnkino-movies works!\'',
      inject([FinnkinoMoviesAppComponent], (app: FinnkinoMoviesAppComponent) => {
    expect(app.title).toEqual('finnkino-movies works!');
  }));
});
