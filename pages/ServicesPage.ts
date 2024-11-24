import { Page, expect } from '@playwright/test';

export class ServicesPage {
  constructor(public page: Page) {}

  async navigateToPage() {
    // Ensure the page is fully loaded
    await this.page.goto('/', { waitUntil: 'networkidle' });
  }

  async openOurServicesDropdown() {
    // Hover over the dropdown to make it visible
    const dropdown = this.page.getByRole('link', { name: 'Our Services ' });
    await dropdown.click();
    await dropdown.waitFor({ state: 'visible' }); // Ensure dropdown becomes visible
  }

  async clickBusinessIntelligence() {
    await this.openOurServicesDropdown();
    const locator = this.page.getByRole('link', { name: 'BUSINESS INTELLIGENCE' });
    await locator.waitFor({ state: 'visible', timeout: 60000 }); // Ensure the link is visible
    await locator.click();
  }

  async verifyBusinessIntelligenceHeading() {
    const headingLocator = this.page.getByRole('heading', { name: 'Business Intelligence' });
  
    // Wait for the heading to become visible
    await headingLocator.waitFor({ state: 'visible', timeout: 60000 }); 
    expect(await headingLocator.isVisible()).toBeTruthy();
  }
  

  async clickMaintenanceAndSupport() {
    await this.openOurServicesDropdown();
    const locator = this.page.getByRole('link', { name: 'MAINTENANCE AND SUPPORT' });
    await locator.waitFor({ state: 'visible', timeout: 60000 });
    await locator.click();
  }

  async verifyMaintenanceAndSupportHeading() {
    const headingLocator = this.page.getByRole('heading', { name: 'Maintenance & Support' });
    await headingLocator.waitFor({ state: 'visible', timeout: 60000 });
    expect(await headingLocator.isVisible()).toBeTruthy();
  }

  async clickTesting() {
    await this.openOurServicesDropdown();
    const locator = this.page.getByRole('link', { name: 'TESTING' });
    await locator.waitFor({ state: 'visible', timeout: 60000 });
    await locator.click();
  }

  async verifyTestingHeading() {
    const headingLocator = this.page.getByRole('heading', { name: 'Testing', exact: true });
    await headingLocator.waitFor({ state: 'visible', timeout: 60000 });
    expect(await headingLocator.isVisible()).toBeTruthy();
  }

  // Additional methods for other services can be added similarly
}
