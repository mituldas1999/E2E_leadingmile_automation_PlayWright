import { chromium, test } from "@playwright/test";

let browser;
let context;
let page;

// Setup before each test
test.beforeEach(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();

  // Navigate to the page
  await page.goto("/");
});

// Hover test
test("hover", async () => {
  await page.hover("(//a[contains(@class,'elementor-item elementor-item-active')])[1]");
});

// Click test

test("Click", async () => {
  await page.click('//header/div[1]/section[1]/div[1]/div[3]/div[1]/div[1]/div[1]/nav[1]/ul[1]/li[3]/ul[1]/li[1]/a[1]');
  await page.waitForTimeout(2000); 
});

// // Cleanup after each test
// test.afterEach(async () => {
//   await browser.close();
// });
