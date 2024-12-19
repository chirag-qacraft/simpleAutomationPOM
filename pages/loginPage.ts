import {Locator, Page} from "@playwright/test";


export class LoginPage{
    
    readonly page: Page;
    readonly unameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly loginButton : Locator;

    constructor(page:Page)
    {
       this.page = page;
       this.unameTextBox = page.locator("//input[@id='user-name']");
       this.passwordTextBox = page.locator("//input[@id='password']");
       this.loginButton = page.locator("//input[@id='login-button']");

    }

    async openApplicationMethod()
    {
        await this.page.goto("https://www.saucedemo.com/v1/")
    }

    async loginCredentialsMethod(userNameValue : string, passwordValue : string)
    {
        await this.unameTextBox.fill(userNameValue);
        await this.passwordTextBox.fill(passwordValue);
        await this.loginButton.click();

    }

}