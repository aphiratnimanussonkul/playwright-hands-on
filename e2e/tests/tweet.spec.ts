import test from "@playwright/test";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";

test.describe("User tweet", () => {
  test("User tweet Hello successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await test.step("Visit Twittah!", async () => {
      await loginPage.visitTwittah();
    });

    await test.step("Login with username and password", async () => {
      await loginPage.fillUsernamePassword();
      loginPage.clickLoginButton();
      await homePage.expectToSeeHomePage();
    });

    await test.step("User tweet Hello", async () => {
      const message = "Hello";
      await homePage.typeTweetMessage(message);
      await homePage.tweet();
      await homePage.expectToSeeTweetMessagePosted(message);
    });
  });
});
