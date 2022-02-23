package com.sliide.pages;

import com.sliide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ImagePage extends Utility {
    private static final Logger log = LogManager.getLogger(ImagePage.class.getName());

    public ImagePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy (xpath = "//img")
    WebElement image;


    public boolean isImageDisplayed(){
        log.info("Image is displayed on page from : "+ image.getAttribute("src"));
        return image.isDisplayed();
    }



}
