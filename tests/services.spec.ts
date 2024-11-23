import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Open and interact with services', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate to the homepage
  await homePage.navigate();

  // Open "Our Services" dropdown and click each service link
  const services = [
    'ACES – Maintenance and Support',
    'BASE – Back to Standard',
    'COIL – Integration Layer',
    'DAME – Data Migration',
    'MIRA – DWH Solution',
    'TARA – Test Automation',
    'VAST – Software Selections',
  ];

  for (const service of services) {
    await homePage.clickOurServices();
    await homePage.clickServiceLink(service);
  }
});
