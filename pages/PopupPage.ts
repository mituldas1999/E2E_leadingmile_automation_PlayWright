import { Page } from '@playwright/test';

export class PopupPage {
  constructor(private page: Page) {}

  async search(term: string) {
    await this.page.getByPlaceholder('Enter the search term here....').fill(term);
    await this.page.getByText('Recent Searches').click();
  }

  async login(username: string, password: string) {
    await this.page.getByTestId('username').fill(username);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByTestId('login-button').click();
  }
}
