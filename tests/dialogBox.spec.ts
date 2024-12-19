import {test,expect} from "@playwright/test";

test('Dialog Box', async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.on('dialog', dialog => console.log(dialog.message()));

    await page.locator("//button[@class='btn btn-danger']").click();

    
})