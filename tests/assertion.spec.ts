import {test, expect} from "@playwright/test";

test('Assertion Topic', async({page})=>{
        await page.goto("https://demo.automationtesting.in/Register.html");

//   const val=6;
//   await expect(val).toEqual(5);

        await expect (page.locator("//input[@placeholder='Last Name']")).toBeVisible();
        await expect (page.locator("//input[@placeholder='Last Name']")).toHaveCount(1);

        page.close();

})