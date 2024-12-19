import { Locator, Page } from "playwright/test";



export class CartPage{

    readonly page: Page;
    readonly productNameLink : Locator;

    constructor (page:Page)
    {
        this.page = page;
        this.productNameLink = page.locator("//div[text()='Sauce Labs Backpack']");
    }
    
}