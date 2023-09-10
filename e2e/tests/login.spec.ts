import test from "@playwright/test";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";

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
      await loginPage.loginWithCorrectUsernamePassword();
      await homePage.expectToSeeHomePage();
    });
  });

  test("User login with incorrect password", async () => {
    await test.step("Login with incorrect password", async () => {
      await loginPage.loginWithIncorrectPassword();
      await loginPage.expectToSeeErrorMessageLoginFailed();
    });
  });
});
