import { Locator, Page, expect } from "@playwright/test";
import ENV from "../env/env.json";

export class HomePage {
  readonly page: Page;

  readonly userDisplayName: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userDisplayName = this.page.getByTestId("user-profile-display-name");
  }

  async expectToSeeHomePage() {
    await expect(this.userDisplayName).toBeVisible();
    await expect(this.userDisplayName).toHaveText(ENV.username);
  }
}
