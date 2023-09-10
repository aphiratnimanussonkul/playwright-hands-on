import test from "@playwright/test";
import { LoginPage } from "../pages/login";

test.describe("User login Twittah!", () => {
  test("User login with username and password successfully", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    
    await test.step("Visit Twittah!", async () => {
      await loginPage.visitTwittah();
    });
  });
});
