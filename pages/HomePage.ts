import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async clickHomeLink() {
    await this.page.locator('#masthead').getByRole('link', { name: 'Home' }).click();
  }

  async clickOurServices() {
    await this.page.getByRole('link', { name: 'Our Services ' }).click();
  }

  async clickLinkedIn() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Linkedin ' }).first().click();
    return await popupPromise;
  }

  async clickServiceLink(serviceName: string) {
    // Ensure the 'Our Services' menu is open
    await this.clickOurServices();

    const locator = this.page.getByRole('link', { name: serviceName });
    
    // Wait for the link to be visible and stable
    await locator.waitFor({ state: 'visible', timeout: 60000 });
    await locator.click({ timeout: 60000 });
  }

  async clickAboutUs() {
    await this.page.locator('#masthead').getByRole('link', { name: 'About Us' }).click();
  }

  async clickCareers() {
    await this.page.locator('#masthead').getByRole('link', { name: 'Careers' }).click();
  }

  async clickOurProducts() {
    await this.page.locator('#masthead').getByRole('link', { name: 'Our Products' }).click();
  }

  async clickLeadingNews() {
    await this.page.locator('#masthead').getByRole('link', { name: 'LeadingNews' }).click();
  }
}
