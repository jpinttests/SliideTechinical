package com.sliide.pages;

import com.sliide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "username")
    WebElement userNameField;

    @FindBy(id = "password")
    WebElement passwordField;

    @FindBy(id = "login_button")
    WebElement signInButton;

    @FindBy (id = "username-helper-text")
    WebElement userNameErrorMessage;

    @FindBy(id ="password-helper-text")
    WebElement passwordErrorMessage;


    public boolean verifyUserNameFieldVisible() {
        log.info("Verifying visibility of UserName Field : " + userNameField.getText());
       return userNameField.isDisplayed();
    }

    public boolean verifyPasswordFieldVisible() {
        log.info("Verifying visibility of Password Field " + passwordField.getText());
        return passwordField.isDisplayed();
    }

    public boolean verifySignInButtonVisible() {
        log.info("Verifying visibility of SignIn Button : " + signInButton.getText());
        return signInButton.isDisplayed();
    }

    public void enterUserNameInField(String userName){
        sendTextToElement(userNameField,userName);
        log.info("Enter " +userName +" in User Name Field");
    }

    public void enterPasswordInField(String password){
        sendTextToElement(passwordField,password);
        log.info("Enter " +password +" in password field");
    }
    public void clickOnSignInButton(){
        clickOnElement(signInButton);
        log.info("Click on Sign in Button");
    }

    public boolean userNameErrorMessage(){
        log.info("Error Message from user name field : "+ userNameErrorMessage.getText());
        return userNameErrorMessage.isDisplayed();
    }

    public boolean passwordErrorMessage(){
        log.info("Error Message from password field : "+ passwordErrorMessage.getText());
        return passwordErrorMessage.isDisplayed();
    }



}
