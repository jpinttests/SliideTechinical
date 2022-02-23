package com.sliide.pages;

import com.sliide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class NewsPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewsPage.class.getName());

    public NewsPage() {
        PageFactory.initElements(driver, this);
    }


    @FindBy(xpath = "//h6[contains(text(),'News')]")
    WebElement newsPageHeader;

    @FindBy(xpath = "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-480o17-MuiGrid-root']//h2")
    List<WebElement> imageTitle;

    @FindBy(xpath = "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-480o17-MuiGrid-root']//a")
    List<WebElement> imageLink;

    @FindBy(xpath = "//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-480o17-MuiGrid-root']//p")
    List<WebElement> imageDescription;

    @FindBy(xpath= "//a[@id='article_link_2']")
    WebElement viewButton;

    @FindBy(xpath = "//p[contains(text(),'Failed to load news')]")
    WebElement failedToLoadError;

    @FindBy(xpath = "//p[contains(text(),'Failed to fetch')]")
    WebElement retryButton;

    public boolean verifyNewsPageVisible() {
        log.info("Verifying visibility of UserName Field : " + newsPageHeader.getText());
        return newsPageHeader.isDisplayed();
    }

    public String getToNewsPage() {
        log.info("User is on News Page " + driver.getCurrentUrl());
        driver.get("http://localhost:3000/news");
        return driver.getCurrentUrl();
    }

    public boolean verifyImageLink() {
        boolean isDisplayed = true;
        for (WebElement linkCheck : imageLink) {
            if (linkCheck.isDisplayed()) {
                isDisplayed = true;
            } else
                isDisplayed = false;
        }
        log.info("User verifying all the links available on Page ");
        return isDisplayed;
    }

    public boolean verifyImageTitle() {
        boolean isDisplayed = true;
        for (WebElement linkCheck : imageTitle) {
            if (linkCheck.isDisplayed()) {
                isDisplayed = true;
            } else
                isDisplayed = false;
        }
        log.info("User verifying all the images available on Page ");
        return isDisplayed;
    }

    public boolean verifyImageDescription() {
        boolean isDisplayed = true;
        for (WebElement linkCheck : imageDescription) {
            if (linkCheck.isDisplayed()) {
                isDisplayed = true;
            } else
                isDisplayed = false;
        }
        log.info("User verifying all the Image descriptions available on Page ");
        return isDisplayed;

    }

    public void clickOnViewButton()  {
        log.info("User click on view button : "+ viewButton.getText());
        JavascriptExecutor js= (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", viewButton);
  }

    public String failToLoadErrorMessage() {
        log.info("User get error : " + failedToLoadError.getText());
        return failedToLoadError.getText();
    }

    public String retryButton() {
        log.info("User can see Retry button : " + retryButton.getText());
        return retryButton.getText();
        // retryButton.isDisplayed();
    }
}