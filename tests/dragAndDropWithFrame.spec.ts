import {test,expect} from "@playwright/test";

test('Drag and Drop With Frame',async({page})=>{

    await   page.goto("https://www.globalsqa.com/demo-site/draganddrop/#Photo%20Manager");

    const frm = page.frameLocator("(//iframe[@class='demo-frame lazyloaded'])[1]");

    await frm.locator("//h5[text()='High Tatras 2']").dragTo(frm.locator("//div[@id='trash']"));

    await page.waitForTimeout(15000);

})