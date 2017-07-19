import { WalnutPage } from './app.po';

describe('walnut App', function() {
  let page: WalnutPage;

  beforeEach(() => {
    page = new WalnutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
