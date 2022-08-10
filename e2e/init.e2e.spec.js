describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  // it('should have "Step One" section', async () => {
  //   await expect(element(by.text('Step One'))).toBeVisible();
  // });

  // it('should have "See Your Changes" section', async () => {
  //   await expect(element(by.text('See Your Changes'))).toBeVisible();
  // });

  it('Navigate to home', async () => {
    await element(by.id('buttonPlay')).tap();
  });

  it('Input email', async () => {
    await element(by.id('email')).typeText('emersonwebdev@gmail.com')
    await element(by.id('email')).tapReturnKey()
  });

  it('Input password', async () => {
    await element(by.id('password')).typeText('letsplay08')
    await element(by.id('password')).tapReturnKey()
  });

  it('Navigate to success', async () => {
    await element(by.id('buttonLogin')).tap();
  });

});
