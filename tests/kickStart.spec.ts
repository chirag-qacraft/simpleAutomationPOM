import {test,expect } from "@playwright/test";

test('FirstTest',async({page})=>{

await page.goto("https://www.google.co.in/")
await page.getByLabel("Google apps").click();
console.log("First Test Success")
})