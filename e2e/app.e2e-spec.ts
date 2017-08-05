import { ShoppingListAppPage } from './app.po';

describe('shopping-list-app App', () => {
  let page: ShoppingListAppPage;

  beforeEach(() => {
    page = new ShoppingListAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
