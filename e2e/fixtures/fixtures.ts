import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/home";

export const test = base.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
