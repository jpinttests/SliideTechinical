package com.sliide.steps;

import com.sliide.pages.HomePage;
import com.sliide.pages.ImagePage;
import com.sliide.pages.NewsPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class NewsFeatureSteps {

    String userName = "user1";
    String password = "pa55word";

    @Then("^- user is navigated to the image of the card$")
    public void userIsNavigatedToTheImageOfTheCard() {
    Assert.assertTrue(new ImagePage().isImageDisplayed());
    }

    @Given("^- there is internet connection$")
    public void thereIsInternetConnection() {
        System.out.println("User is connected with Internet");
    }

    @When("^- the user successfully signs in to the app$")
    public void theUserSuccessfullySignsInToTheApp() {
       new HomePage().enterUserNameInField(userName);
        new HomePage().enterPasswordInField(password);
        new HomePage().clickOnSignInButton();
    }

    @Given("^- the news cards are successfully loaded on the screen$")
    public void theNewsCardsAreSuccessfullyLoadedOnTheScreen() {
        new HomePage().enterUserNameInField(userName);
        new HomePage().enterPasswordInField(password);
        new HomePage().clickOnSignInButton();
    }

    @When("^- the user clicks on the view button of the card$")
    public void theUserClicksOnTheViewButtonOfTheCard() throws InterruptedException {
          new NewsPage().clickOnViewButton();
    }


    @Then("^- news cards are displayed in rows and each card contains an image, text and a view button \\(cards can have one or more images scrollable horizontally\\)$")
    public void newsCardsAreDisplayedInRowsAndEachCardContainsAnImageTextAndAViewButtonCardsCanHaveOneOrMoreImagesScrollableHorizontally() {
        Assert.assertTrue(new NewsPage().verifyImageTitle());
        Assert.assertTrue(new NewsPage().verifyImageLink());
        Assert.assertTrue(new NewsPage().verifyImageDescription());
    }


    @Given("^- there is no internet connection$")
    public void thereIsNoInternetConnection() {
        System.out.println("User got disconnected form Internet");
    }

    @Then("^- “failed to load news” error message and a Retry button are displayed$")
    public void failedToLoadNewsErrorMessageAndARetryButtonAreDisplayed() {
        Assert.assertEquals("Failed to load news",new NewsPage().failToLoadErrorMessage());
        Assert.assertEquals("Retry",new NewsPage().retryButton());
        //Assert.assertTrue(new NewsPage().retryButton());
    }
}
