import { Angular2TutorialPage } from './app.po';

describe('angular2-tutorial App', () => {
  let page: Angular2TutorialPage;

  beforeEach(() => {
    page = new Angular2TutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
