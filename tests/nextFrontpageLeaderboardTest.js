module.exports = {
  'Next Frontpage Leaderboard Visibility' : function (client) {
    client
      .url('http://next.ft.com/__opt-in')
      .waitForElementVisible('body', 5000)
      .assert.title('FT.com')
      .click('a[href="/login"]')
      .waitForElementVisible('input[type=email]', 5000)
      .waitForElementVisible('input[type=password]', 5000)
      .setValue('input[type=email]', 'advertising-team-monitoring-account@ftqa.org')
      .setValue('input[type=password]', 'advertising')
      .click('button#submit-btn')
      .pause(5000)
      .frame('google_ads_iframe_5887/ft.com/home/UK_0')
        .pause(5000)
        .assert.elementPresent('div[data-cb-creative-id="53134803289"]')
      .frame(null)
      .end();
  }
};
