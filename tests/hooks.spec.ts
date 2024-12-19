import {test,expect} from "@playwright/test";

test.beforeEach('Before Each',async()=>{
    console.log("Before Each Execute Successfully")
})

test('Test 1', async({page})=>{
    console.log("Starting Test 1")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 1");
})

test('Test 2', async({page})=>{
    console.log("Starting Test 2")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 2");
})

test('Test 3', async({page})=>{
    console.log("Starting Test 3")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 3");
})

test('Test 4', async({page})=>{
    console.log("Starting Test 4")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 4");
})

test.describe('Describe', async()=>{
  
test('Test 5', async({page})=>{
    console.log("Starting Test 5")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 5");
})

test('Test 6', async({page})=>{
    console.log("Starting Test 6")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 6");
})

test('Test 7', async({page})=>{
    console.log("Starting Test 7")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 7");
})

test('Test 8', async({page})=>{
    console.log("Starting Test 8")
    await page.goto("https://chatgpt.com/");
    console.log("Ending Test 8");
})

})

