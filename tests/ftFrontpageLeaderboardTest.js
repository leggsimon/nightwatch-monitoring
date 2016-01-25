module.exports = {
  'FT.com Super Leaderboard Visibility' : function (client) {
    client
      .url('http://www.ft.com/home/uk')
      .waitForElementVisible('body', 1000)
      .assert.title('World business, finance, and political news from the Financial Times - FT.com')
      .click('a#ftLogin-signIn')
      .waitForElementVisible('input[type=email]', 1000)
      .setValue('input[type=email]', 'advertising-team-monitoring-account@ftqa.org')
      .setValue('input[type=password]', 'advertising')
      .click('button#submit-btn')
      .pause()
      // .waitForElementVisible('a.next-opt__link', 5000)
      // .click('a.next-opt__link')
      // .waitForElementVisible('div[data-cb-creative-id="53134803289"]', 5000)
      // .pause(5000)
      // .assert.elementPresent('div[data-cb-creative-id="53134803289"]')
      .end();
  }
};
