import { Locator, Page, expect } from "@playwright/test";
import ENV from "../env/env.json";

export class HomePage {
  private readonly page: Page;

  private readonly userDisplayName: Locator;
  private readonly messageTextArea: Locator;
  private readonly postButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userDisplayName = this.page.getByTestId("user-profile-display-name");
    this.messageTextArea = this.page.getByTestId("message-field");
    this.postButton = this.page.getByTestId("post-button");
  }

  async expectToSeeHomePage() {
    await expect(this.userDisplayName).toBeVisible();
    await expect(this.userDisplayName).toHaveText(ENV.username);
  }

  async typeTweetMessage(message: string) {
    await this.messageTextArea.type(message);
    await expect(this.messageTextArea).toHaveValue(message);
  }

  async tweet() {
    await this.postButton.click();
    await this.page.waitForTimeout(1000);
  }

  async expectToSeeTweetMessagePosted(message: string) {
    const tweetMessage = this.page.getByText(message).first();
    await expect(tweetMessage).toBeVisible();
  }
}
