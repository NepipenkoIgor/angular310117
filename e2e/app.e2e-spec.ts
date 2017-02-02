import { Angula300117Page } from './app.po';

describe('angula300117 App', function() {
  let page: Angula300117Page;

  beforeEach(() => {
    page = new Angula300117Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
