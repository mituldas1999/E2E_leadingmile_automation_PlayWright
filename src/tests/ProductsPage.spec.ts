import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Page Tests', () => {
  test('Navigate to Maintenance and Support', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    // Navigate to the homepage
    await productsPage.navigate();

    // Interact with the Maintenance and Support menu item
    await productsPage.clickMenuItem('maintenanceAndSupport');

    // Validate the result (example assertion)
    await expect(page).toHaveURL(/aces/);
  });

  test('Navigate to Integration Layer', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    // Navigate to the homepage
    await productsPage.navigate();

    // Interact with the Integration Layer menu item
    await productsPage.clickMenuItem('integrationLayer');

    // Validate the result (example assertion)
    await expect(page).toHaveURL(/cepres-api/);
  });

  test('Navigate to Data Migration', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    // Navigate to the homepage
    await productsPage.navigate();

    // Interact with the Data Migration menu item
    await productsPage.clickMenuItem('dataMigration');

    // Validate the result (example assertion)
    await expect(page).toHaveURL(/data-migration/);
  });
});
