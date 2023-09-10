import { Locator, Page, expect } from "@playwright/test";
import ENV from "../env/env.json";

export class LoginPage {
  readonly page: Page;

  readonly appName: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.appName = this.page.getByTestId("app-name");
    this.usernameInput = this.page.getByTestId("login-field");
    this.passwordInput = this.page.getByTestId("password-field");
    this.loginButton = this.page.getByTestId("login-button");
  }

  async visitTwittah() {
    await this.page.goto(ENV.baseUrl);

    await expect(this.appName).toBeVisible();
    await expect(this.appName).toHaveText("Twittah!");
  }

  async fillUsernamePassword() {
    await this.usernameInput.type(ENV.username);
    await this.passwordInput.type(ENV.password);

    await expect(this.usernameInput).toHaveValue(ENV.username);
    await expect(this.passwordInput).toHaveValue(ENV.password);
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}
