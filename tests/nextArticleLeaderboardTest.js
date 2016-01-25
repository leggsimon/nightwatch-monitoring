umodule.exports = {
  'Next Article Leaderboard Visibility' : function (client) {
    var browserName = client.options.desiredCapabilities.browserName
    var pageType = 'article'
    client
      .url('http://next.ft.com/__opt-in')
      .waitForElementVisible('body', 5000)
      .assert.title('FT.com')
      .click('a[href="/login"]')
      .waitForElementVisible('input[type=email]', 5000)
      .waitForElementVisible('input[type=password]', 5000)
      .setValue('input[type=email]', 'advertising-team-monitoring-account@ftqa.org')
      .setValue('input[type=password]', 'advertising')
      .click('button#submit-btn');
    client
      .url('https://next.ft.com/content/9f677a3a-9e69-11e5-8ce1-f6219b685d74')
      .waitForElementVisible('body', 5000)
      .pause(5000)
      .frame('google_ads_iframe_5887/ft.com/unclassified_0')
        .pause(5000)
        .assert.attributeContains('div#chartbeat-ad-data', 'data-cb-creative-id', '53134803289')
        .assert.hidden('div[data-cb-creative-id="53134803289"]')
      .frame(null)
      .end();
  }
};
