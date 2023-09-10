import test from "@playwright/test";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";
import { validUser, invalidUsers } from "../fixtures/user";

test.describe("User login Twittah!", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await test.step("Visit Twittah!", async () => {
      await loginPage.visitTwittah();
    });
  });

  test("User login with username and password successfully", async () => {
    await test.step("Login with username and password", async () => {
      await loginPage.loginWithUsernamePassword(
        validUser.username,
        validUser.password
      );
      await homePage.expectToSeeHomePage(validUser.username);
    });
  });

  for (const invalidUser of invalidUsers) {
    test(`User login with invalid credential by using username: ${invalidUser.username}, password: ${invalidUser.password}`, async () => {
      await loginPage.loginWithUsernamePassword(
        invalidUser.username,
        invalidUser.password
      );
      await loginPage.expectToSeeErrorMessageLoginFailed(
        invalidUser.errorMessage
      );
    });
  }
});
