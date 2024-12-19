import { Locator, Page } from "playwright/test";

export class HomePage{

    readonly page:Page;
    readonly homePageHeading : Locator;
    readonly addToCartButton:Locator;
    readonly removeFromCartButton : Locator;
    readonly cartIcon : Locator

    constructor(page:Page)
    {
        this.page = page;
        this.homePageHeading = page.locator("//div[@class='app_logo']");
        this.addToCartButton = page.locator("//div[text()='Sauce Labs Backpack']//following::button[1]");
        this.removeFromCartButton = page.locator("//button[text()='REMOVE']");
        this.cartIcon = page.locator("//div[@id='shopping_cart_container']");
    }

   async addToCartMethod(){
        await this.addToCartButton.click();
   }

   async goToCartIconMethod(){
        await this.cartIcon.click();     
   }

}