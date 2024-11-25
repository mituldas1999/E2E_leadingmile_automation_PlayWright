import { Browser, chromium, Page } from '@playwright/test';
import { HomePage } from './HomePage';

let browser: Browser;
let page: Page;
let homePage: HomePage;

export async function setup() {
  // Launch browser and create context and page
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();

  // Initialize HomePage class
  homePage = new HomePage(page);

  // Navigate to the home page
  await homePage.navigate();
}

export async function cleanup() {
  // Close the browser
  await browser.close();
}

export { homePage };
