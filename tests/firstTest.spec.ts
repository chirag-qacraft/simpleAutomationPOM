import {test,expect} from "@playwright/test";

test('input fields',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/');

    const email = page.locator("//input[@id='user-name']");
    await email.fill("standard_user");

    const password = page.locator("//input[@id='password']");
    await password.fill("secret_sauce");

    const loginBtn = page.locator("//input[@id='login-button']");
    await loginBtn.click();

    const bagPack= page.locator("text='Sauce Labs Backpack'");
    await bagPack.click();

    const addCart = page.locator("//button[@class='btn_primary btn_inventory']");
    await addCart.click();

    const remove = page.locator("//button[@class='btn_secondary btn_inventory']");
    await remove.click();

})
