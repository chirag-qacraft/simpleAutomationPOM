import {test,expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";
import {CartPage} from "../pages/cartPage";

test('Cart Varification', async({page})=>{

    const loginObj = new LoginPage(page);
    await loginObj.openApplicationMethod();
    await loginObj.loginCredentialsMethod("standard_user","secret_sauce");

    const homePageObj = new HomePage(page);
 
    //   await expect(homePageObj.homePageHeading).toHaveClass("app_logo'");
    
    await homePageObj.addToCartMethod();
    await expect(homePageObj.cartIcon).toHaveText("1");
    await expect(homePageObj.removeFromCartButton).toBeVisible();
    await homePageObj.goToCartIconMethod();

    const cartPageObj = new CartPage(page);

    await expect(cartPageObj.productNameLink).toHaveText("Sauce Labs Backpack");

})