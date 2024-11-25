import { test, expect } from '@playwright/test';
import { ServicesPage } from '../pages/ServicesPage';

test.describe('Services Page Tests', () => {
  let servicesPage: ServicesPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the ServicesPage and navigate to the homepage
    servicesPage = new ServicesPage(page);
    await servicesPage.navigateToPage();
  });

  test('Navigate to and verify Business Intelligence', async () => {
    // Navigate to Business Intelligence and verify the heading
    await servicesPage.clickBusinessIntelligence();
    await servicesPage.verifyBusinessIntelligenceHeading();
  });

  test('Navigate to and verify Maintenance and Support', async () => {
    // Navigate to Maintenance and Support and verify the heading
    await servicesPage.clickMaintenanceAndSupport();
    await servicesPage.verifyMaintenanceAndSupportHeading();
  });

  test('Navigate to and verify Testing', async () => {
    // Navigate to Testing and verify the heading
    await servicesPage.clickTesting();
    await servicesPage.verifyTestingHeading();
  });

  // Add other service-specific tests as needed, following the same pattern
});
