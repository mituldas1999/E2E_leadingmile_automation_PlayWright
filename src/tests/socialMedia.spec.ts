import { test, expect } from '@playwright/test'; // Include expect
import { HomePage } from '../pages/HomePage';

test('Open LinkedIn popup', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate to the homepage
  await homePage.navigate();

  // Open LinkedIn in a popup
  const linkedInPopup = await homePage.clickLinkedIn();
  expect(linkedInPopup).not.toBeNull(); // Assert the popup is not null
});
