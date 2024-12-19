import { test, expect } from "@playwright/test";

test('Upload File', async ({ page }) => {

  await page.goto("https://practice.expandtesting.com/upload");

  const fileUpload = page.locator("//input[@id='fileInput']");

  const filePath = "C:\\Users\\qacra\\OneDrive\\Desktop\\configSetting.txt";

  await fileUpload.setInputFiles(filePath);

  await page.locator("//button[text()='Upload']").click();
});
