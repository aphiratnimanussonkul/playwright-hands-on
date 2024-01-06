import { test } from "../fixtures/fixtures";
import { createBdd } from "playwright-bdd/index";

const { Given, When, Then } = createBdd(test);

Given("I open Twittah", async ({ loginPage }) => {
  await loginPage.visitTwittah();
});

When(
  /I login with login name ([^ ]+) and password ([^ ]+)/,
  async ({ loginPage }, loginName: string, password: string) => {
    await loginPage.loginWithUsernamePassword(loginName, password);
  }
);

Then(
  "I see the home page with username {string}",
  async ({ homePage }, username: string) => {
    await homePage.expectToSeeHomePage(username);
  }
);
