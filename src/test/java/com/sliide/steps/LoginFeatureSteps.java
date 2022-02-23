package com.sliide.steps;

import com.sliide.pages.HomePage;
import com.sliide.pages.NewsPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginFeatureSteps {


    @Given("^- the user opens web site for the first time \\(when not logged in yet\\)$")
    public void theUserOpensWebSiteForTheFirstTimeWhenNotLoggedInYet() {
        System.out.println("As a user I am on new HomePage() first time.");
    }

    @Then("^- login screen with user name and password entries and login button is displayed$")
    public void loginScreenWithUserNameAndPasswordEntriesAndLoginButtonIsDisplayed() {
        Assert.assertTrue(new HomePage().verifyUserNameFieldVisible());
        Assert.assertTrue(new HomePage().verifyPasswordFieldVisible());
        Assert.assertTrue(new HomePage().verifySignInButtonVisible());
    }


    @Given("^- the user provides wrong user name and/or password$")
    public void theUserProvidesWrongUserNameAndOrPassword() {
        String userName = "abc@gmail.com";
        String password = "pa55word";
        new HomePage().enterUserNameInField(userName);
        new HomePage().enterPasswordInField(password);
    }

    @When("^- sign in button is clicked$")
    public void signInButtonIsClicked() {
        new HomePage().clickOnSignInButton();
    }

    @Then("^- error markers are displayed by user name and/or password entries$")
    public void errorMarkersAreDisplayedByUserNameAndOrPasswordEntries() {
      boolean errorIsDisplayed;
        errorIsDisplayed =  new HomePage().userNameErrorMessage() || new HomePage().passwordErrorMessage();
        Assert.assertTrue(errorIsDisplayed);
        }

    @Given("^- the user provided right user name and password$")
    public void theUserProvidedRightUserNameAndPassword() {
        String userName = "user1";
        String password = "pa55word";
        new HomePage().enterUserNameInField(userName);
        new HomePage().enterPasswordInField(password);
    }

    @Then("^- user is taken to the news page$")
    public void userIsTakenToTheNewsPage() {
        Assert.assertTrue(new NewsPage().verifyNewsPageVisible());
    }

    @Given("^- the user opens web site next time \\(when previously logged in\\)$")
    public void theUserOpensWebSiteNextTimeWhenPreviouslyLoggedIn() {
        System.out.println("User try to login in again");
    }

    @Then("^- user is taken straight to the news screen$")
    public void userIsTakenStraightToTheNewsScreen() {
        String expectedUrl= "http://localhost:3000/news";
        String actualUrl = (new NewsPage().getToNewsPage());
        Assert.assertEquals(actualUrl,expectedUrl);
        }





}
