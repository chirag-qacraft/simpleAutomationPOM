import {test,expect} from "@playwright/test";


test('UI Components',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");

    const fname = page.locator("//input[@placeholder='First Name']");
    await fname.fill("Chirag");

    const lname = page.locator("//input[@placeholder='Last Name']");
    await lname.fill("Ahir");

    const addr = page.locator("//label[text()='Email address*']//preceding::textarea");
    await addr.fill("Waghodiya Road, Vadodara");

    const email = page.locator("//div[@id='eid']//child::input");
    await email.fill("chiragahir@gmail.com");

    const ph = page.locator("//input[@type='tel']");
    await ph.fill("1234567890");

    const gen = page.locator("//label[text()=' Male ']");
    await gen.click();

    const chkbx1 = page.locator("//input[@id='checkbox1']")
    await chkbx1.click();

    const chkbx2 = page.locator("//input[@id='checkbox2']")
    await chkbx2.click();

    const langDD = "//div[@id='msdd']";
    await page.click(langDD);

    const langSelect = "//a[text()='Hindi']";
    await page.click(langSelect);
    
    const langSelect2 = "//a[text()='English']";
    await page.click(langSelect2); 

    await page.waitForTimeout(5000);

    const langDeselect = "//div[text()='Hindi']//child::span";
    await page.click(langDeselect);
    
    const skill = "//label[text()='Skills']";
    await page.click(skill);

    await page.selectOption("//select[@id='Skills']", { value: 'Java' });

    await page.selectOption("//select[@id='countries']", { value: 'Select Country' });

//     const contDD = "//span[@id='select2-country-container']";
//     const searchBoxCont = "//input[@type='search']";
//     const countNm = "//li[contains(text(), 'India')]";

//     await page.click(contDD);
  
//   await page.fill(searchBoxCont, 'India'); 
//   await page.waitForSelector(contDD); 
//   await page.click(countNm); 

//     await page.selectOption("//select[@id='yearbox']", { value: '1995' });

//     await page.selectOption("//select[@placeholder='Month']", { value: 'January' });

//     await page.selectOption("//select[@id='daybox']", { value: '30' });

    
})