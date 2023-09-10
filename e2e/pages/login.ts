import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly appName: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.appName = this.page.getByTestId("app-name");
    this.usernameInput = this.page.getByTestId("login-field");
    this.passwordInput = this.page.getByTestId("password-field");
  }

  async visitTwittah() {
    await this.page.goto("https://twittah.web.app");
    await expect(this.appName).toBeVisible();
    await expect(this.appName).toHaveText("Twittah!");
  }
}
