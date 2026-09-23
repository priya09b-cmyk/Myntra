import { test } from "@playwright/test";

test("Frame - Form Fill for Hyrtutorials", async ({ page }) => {
     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frameTwoElement = page.locator("//iframe[@id='frm2']");
    await frameTwoElement.scrollIntoViewIfNeeded();
    const frameTwo = page.frameLocator("//iframe[@id='frm2']");
    await frameTwo.locator("//input[@placeholder='Enter First Name']").fill("priyanka");
    await frameTwo.locator("//input[@placeholder='Enter Last Name']").fill("riya");
    await frameTwo.locator("//input[@id='malerb']").check();
    await frameTwo.locator("//input[@id='englishchbx']").check();
    await frameTwo.locator("//input[@id='hindichbx']").check();
    await frameTwo.locator("//input[@placeholder='Enter Email']").fill("priya09@gmail.com");
    await frameTwo.locator("//input[@placeholder='Enter Password']").fill("p2@231");
    await frameTwo.locator("//button[@onclick='registerFunction()']").click();
    await page.waitForTimeout(4000);
});