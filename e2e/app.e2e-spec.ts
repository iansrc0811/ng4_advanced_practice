import { Ng4AdvancePage } from './app.po';

describe('ng4-advance App', () => {
  let page: Ng4AdvancePage;

  beforeEach(() => {
    page = new Ng4AdvancePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
