$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to log in to the web site",
  "description": "",
  "id": "as-a-user-i-want-to-log-in-to-the-web-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6906922400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#@Sanity"
    }
  ],
  "line": 3,
  "name": "1. User access the web site for first time (when not logged in yet)",
  "description": "",
  "id": "as-a-user-i-want-to-log-in-to-the-web-site;1.-user-access-the-web-site-for-first-time-(when-not-logged-in-yet)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "- the user opens web site for the first time (when not logged in yet)",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "- login screen with user name and password entries and login button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureSteps.theUserOpensWebSiteForTheFirstTimeWhenNotLoggedInYet()"
});
formatter.result({
  "duration": 74770200,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.loginScreenWithUserNameAndPasswordEntriesAndLoginButtonIsDisplayed()"
});
formatter.result({
  "duration": 244135800,
  "status": "passed"
});
formatter.after({
  "duration": 773235200,
  "status": "passed"
});
formatter.before({
  "duration": 3644583600,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "2.  User login failed",
  "description": "",
  "id": "as-a-user-i-want-to-log-in-to-the-web-site;2.--user-login-failed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "- the user provides wrong user name and/or password",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "- sign in button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "- error markers are displayed by user name and/or password entries",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureSteps.theUserProvidesWrongUserNameAndOrPassword()"
});
formatter.result({
  "duration": 487494400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.signInButtonIsClicked()"
});
formatter.result({
  "duration": 122834600,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.errorMarkersAreDisplayedByUserNameAndOrPasswordEntries()"
});
formatter.result({
  "duration": 69315800,
  "status": "passed"
});
formatter.after({
  "duration": 836581400,
  "status": "passed"
});
formatter.before({
  "duration": 3707891300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "3. User login succeed (credentials provided below)",
  "description": "",
  "id": "as-a-user-i-want-to-log-in-to-the-web-site;3.-user-login-succeed-(credentials-provided-below)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "- the user provided right user name and password",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "- sign in button is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "- user is taken to the news page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureSteps.theUserProvidedRightUserNameAndPassword()"
});
formatter.result({
  "duration": 393228000,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.signInButtonIsClicked()"
});
formatter.result({
  "duration": 157155400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.userIsTakenToTheNewsPage()"
});
formatter.result({
  "duration": 73445200,
  "status": "passed"
});
formatter.after({
  "duration": 731714300,
  "status": "passed"
});
formatter.before({
  "duration": 4170017100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "4. - User opens web site next time (when previously logged in)",
  "description": "",
  "id": "as-a-user-i-want-to-log-in-to-the-web-site;4.---user-opens-web-site-next-time-(when-previously-logged-in)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "- the user opens web site next time (when previously logged in)",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "- user is taken straight to the news screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureSteps.theUserOpensWebSiteNextTimeWhenPreviouslyLoggedIn()"
});
formatter.result({
  "duration": 163400,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureSteps.userIsTakenStraightToTheNewsScreen()"
});
formatter.result({
  "duration": 240363800,
  "error_message": "java.lang.AssertionError: expected [http://localhost:3000/news] but found [http://localhost:3000/]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.sliide.steps.LoginFeatureSteps.userIsTakenStraightToTheNewsScreen(LoginFeatureSteps.java:68)\r\n\tat ✽.Then - user is taken straight to the news screen(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 913631700,
  "status": "passed"
});
formatter.uri("NewsFeature.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to see my news",
  "description": "",
  "id": "as-a-user-i-want-to-see-my-news",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3391758500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "1 - News cards are loaded",
  "description": "",
  "id": "as-a-user-i-want-to-see-my-news;1---news-cards-are-loaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "- there is internet connection",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "- the user successfully signs in to the app",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "- news cards are displayed in rows and each card contains an image, text and a view button (cards can have one or more images scrollable horizontally)",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsFeatureSteps.thereIsInternetConnection()"
});
formatter.result({
  "duration": 167800,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.theUserSuccessfullySignsInToTheApp()"
});
formatter.result({
  "duration": 537055400,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.newsCardsAreDisplayedInRowsAndEachCardContainsAnImageTextAndAViewButtonCardsCanHaveOneOrMoreImagesScrollableHorizontally()"
});
formatter.result({
  "duration": 5968279900,
  "status": "passed"
});
formatter.after({
  "duration": 909601500,
  "status": "passed"
});
formatter.before({
  "duration": 3439756200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "2 - Failed to load news",
  "description": "",
  "id": "as-a-user-i-want-to-see-my-news;2---failed-to-load-news",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "- there is no internet connection",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "- the user successfully signs in to the app",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "- “failed to load news” error message and a Retry button are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsFeatureSteps.thereIsNoInternetConnection()"
});
formatter.result({
  "duration": 91200,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.theUserSuccessfullySignsInToTheApp()"
});
formatter.result({
  "duration": 508354200,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.failedToLoadNewsErrorMessageAndARetryButtonAreDisplayed()"
});
formatter.result({
  "duration": 20081262200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027Failed to load news\u0027)]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-EBTO0JF\u0027, ip: \u0027192.168.50.92\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5067420bcfef2b5c27437451f7f6b9d7, findElement {using\u003dxpath, value\u003d//p[contains(text(),\u0027Failed to load news\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\DELL\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:65016}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:65016/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5067420bcfef2b5c27437451f7f6b9d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.sliide.pages.NewsPage.failToLoadErrorMessage(NewsPage.java:97)\r\n\tat com.sliide.steps.NewsFeatureSteps.failedToLoadNewsErrorMessageAndARetryButtonAreDisplayed(NewsFeatureSteps.java:61)\r\n\tat ✽.Then - “failed to load news” error message and a Retry button are displayed(NewsFeature.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1079493900,
  "status": "passed"
});
formatter.before({
  "duration": 4272535600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "3 - News view button is clicked",
  "description": "",
  "id": "as-a-user-i-want-to-see-my-news;3---news-view-button-is-clicked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "- the news cards are successfully loaded on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "- the user clicks on the view button of the card",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "- user is navigated to the image of the card",
  "keyword": "Then "
});
formatter.match({
  "location": "NewsFeatureSteps.theNewsCardsAreSuccessfullyLoadedOnTheScreen()"
});
formatter.result({
  "duration": 501474900,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.theUserClicksOnTheViewButtonOfTheCard()"
});
formatter.result({
  "duration": 7802140800,
  "status": "passed"
});
formatter.match({
  "location": "NewsFeatureSteps.userIsNavigatedToTheImageOfTheCard()"
});
formatter.result({
  "duration": 138664300,
  "status": "passed"
});
formatter.after({
  "duration": 766641700,
  "status": "passed"
});
});