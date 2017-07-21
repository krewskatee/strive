import { StrivePage } from './app.po';

describe('strive App', function() {
  let page: StrivePage;

  beforeEach(() => {
    page = new StrivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
