import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  // Navigate to the homepage or any specific URL
  async navigate(url: string = '/') {
    await this.page.goto(url);
  }

  // Helper method to hover and click
  private async hoverAndClick(hoverSelector: string, clickSelector: string) {
    const hoverElement = this.page.locator(hoverSelector);
    await hoverElement.hover();
    const clickElement = this.page.locator(clickSelector);
    await clickElement.click();
  }

  // Map of menu items with hover and click selectors
  private menuItems = {
    maintenanceAndSupport: {
      hover: 'id="sm-17324290601107603-3"',
      click: "(//a[contains(@class,'elementor-sub-item elementor-item-active')])[1]",
    },
    backToStandard: {
      hover: 'id="sm-17324290601107603-3"',
      click: "(//a[@class='elementor-sub-item elementor-item-active'])[1]",
    },
    integrationLayer: {
      hover: '//*[@id="sm-173242958816807-4"]',
      click: '//*[@id="sm-173242958816807-4"]/li[3]/a',
    },
    dataMigration: {
      hover: '//*[@id="sm-173242958816807-4"]',
      click: '//*[@id="sm-173242958816807-4"]/li[4]/a',
    },
    dwhSolution: {
      hover: '//*[@id="sm-173242958816807-4"]',
      click: '//*[@id="sm-173242958816807-4"]/li[5]/a',
    },
    testAutomation: {
      hover: '//*[@id="sm-173242958816807-4"]',
      click: '//*[@id="sm-173242958816807-4"]/li[6]/a',
    },
    softwareSelections: {
      hover: '//*[@id="sm-173242958816807-4"]',
      click: '//*[@id="sm-173242958816807-4"]/li[7]/a',
    },
  };

  // Generic method to interact with menu items
  async clickMenuItem(item: keyof typeof this.menuItems) {
    const { hover, click } = this.menuItems[item];
    await this.hoverAndClick(hover, click);
  }
}
