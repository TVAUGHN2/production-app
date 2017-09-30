import { ProductionAppPage } from './app.po';

describe('production-app App', () => {
  let page: ProductionAppPage;

  beforeEach(() => {
    page = new ProductionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
