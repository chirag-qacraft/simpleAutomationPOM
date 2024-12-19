import {test,expect} from "@playwright/test";

test('Date Picker',async({page})=>{

    await page.goto("https://jqueryui.com/datepicker/");

    const frm = page.frameLocator("//iframe[@class='demo-frame']");
    const datePickerTextbox = await frm.locator("//input[@id='datepicker']");
    await datePickerTextbox.fill("01/30/1995");

   await frm.locator("//p[text()='Date: ']").click();
    
})