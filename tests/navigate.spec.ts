import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navigate to homepage', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate to the homepage
  await homePage.navigate();
  expect(await page.title()).toContain("TECHNOLOGY AND CONSULTING FOR ALTERNATIVE INVESTMENTS"); // Adjust based on the actual title
});

test('Click on Home link', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate and click Home link
  await homePage.navigate();
  await homePage.clickHomeLink();
});

test('Click on About Us', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate and click About Us
  await homePage.navigate();
  await homePage.clickAboutUs();
});

test('Click on Careers', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate and click Careers
  await homePage.navigate();
  await homePage.clickCareers();
});

test('Click on Leading News', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate and click Leading News
  await homePage.navigate();
  await homePage.clickLeadingNews();
});
