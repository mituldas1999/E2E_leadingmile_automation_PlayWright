import { test } from '@playwright/test';
import { setup, cleanup, homePage } from '../testUtils';

test.beforeAll(async () => {
  await setup();
});

test.afterAll(async () => {
  await cleanup();
});

test('Click Home Link', async () => {
  await homePage.clickHomeLink();
});

test('Click Our Services', async () => {
  await homePage.clickOurServices();
});

test('Click LinkedIn', async () => {
  const linkedInPopup = await homePage.clickLinkedIn();
  // Perform actions on the popup if needed
  await linkedInPopup.close();
});

test('Click Service Link', async () => {
  await homePage.clickServiceLink('Service Name'); // Replace with actual service name
});
// test file
test('Click About Us', async () => {
  await homePage.clickAboutUs();
});

test('Click Careers', async () => {
  await homePage.clickCareers();
});

test('Click Our Products', async () => {
  await homePage.clickOurProducts();
});

test('Click Leading News', async () => {
  await homePage.clickLeadingNews();
});
