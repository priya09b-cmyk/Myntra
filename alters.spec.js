import { test } from "@playwright/test";

test("Handling Alerts", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());

    if (dialog.type() === "alert") {
      await dialog.accept();
    } else if (dialog.type() === "confirm") {
      await dialog.dismiss();
    } else if (dialog.type() === "prompt") {
      await dialog.accept("Hello !");
    }
  });

  await page.locator("#alertButton").click();

  await page.locator("#confirmButton").click();

  await page.locator("#promtButton").click();

  await page.locator("#timerAlertButton").click();
  await page.waitForTimeout(3000);
  });