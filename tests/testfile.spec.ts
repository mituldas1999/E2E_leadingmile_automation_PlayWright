import { test, expect } from '@playwright/test';

test('Landing Page', async ({ page }) => {
  await page.goto('/');
});

test('Hover Our Product Button', async ({ page }) => {
  await page.goto('/');

  const locator = page.locator('//a[@class="elementor-item" and contains(text(), "Our Services")]');
  const count = await locator.count();
  
  // Debug: Ensure only one element matches
  expect(count).toBe(1); 

  // Hover over the first element if there are multiple
  await locator.first().hover();
});
