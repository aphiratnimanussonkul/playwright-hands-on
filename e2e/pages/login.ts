import { Locator, Page, expect } from "@playwright/test";
import { config } from "../fixtures/config";

export class LoginPage {
  private readonly page: Page;

  private readonly appName: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessageText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.appName = this.page.getByTestId("app-name");
    this.usernameInput = this.page.getByTestId("login-field");
    this.passwordInput = this.page.getByTestId("password-field");
    this.loginButton = this.page.getByTestId("login-button");
    this.errorMessageText = this.page.getByTestId("error-message");
  }

  async visitTwittah() {
    await this.page.goto(config.baseUrl);
  }

  async shouldBeDisplayed() {
    await expect(this.appName).toBeVisible();
    await expect(this.appName).toHaveText("Twittah!");
  }

  private async fillUsernamePassword(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);

    await expect(this.usernameInput).toHaveValue(username);
    await expect(this.passwordInput).toHaveValue(password);
  }

  private clickLoginButton() {
    this.loginButton.click();
  }

  async loginWithUsernamePassword(username: string, password: string) {
    await this.fillUsernamePassword(username, password);
    this.clickLoginButton();
  }

  async expectToSeeErrorMessageLoginFailed(message: string) {
    await expect(this.errorMessageText).toHaveText(message);
  }
}
