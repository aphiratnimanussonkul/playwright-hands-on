import { Locator, Page, expect } from "@playwright/test";
import ENV from "../env/env.json";

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
    await this.page.goto(ENV.baseUrl);

    await expect(this.appName).toBeVisible();
    await expect(this.appName).toHaveText("Twittah!");
  }

  private async fillUsernamePassword() {
    await this.usernameInput.type(ENV.username);
    await this.passwordInput.type(ENV.password);

    await expect(this.usernameInput).toHaveValue(ENV.username);
    await expect(this.passwordInput).toHaveValue(ENV.password);
  }

  private clickLoginButton() {
    this.loginButton.click();
  }

  async loginWithCorrectUsernamePassword() {
    await this.fillUsernamePassword();
    this.clickLoginButton();
  }

  async loginWithIncorrectPassword() {
    const incorrectPassword = "12345678";
    await this.usernameInput.type(ENV.username);
    await this.passwordInput.type(incorrectPassword);

    await expect(this.usernameInput).toHaveValue(ENV.username);
    await expect(this.passwordInput).toHaveValue(incorrectPassword);

    this.clickLoginButton();
  }

  async expectToSeeErrorMessageLoginFailed() {
    await expect(this.errorMessageText).toHaveText(
      "ล็อกอินหรือรหัสผ่านไม่ถูกต้อง"
    );
  }
}
