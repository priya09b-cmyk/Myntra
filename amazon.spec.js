import { test } from "@playwright/test";

test("Amazon - AutoSuggestion", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  const productName = "iPhone 17 256 GB";
  // const rating = "4.6";

  await page
    .locator("//input[@placeholder='Search Amazon.in']")
    .fill(productName);
   
  const suggestion = await page.locator(
    `//div[@class="autocomplete-results-container"]
    /descendant::div[@aria-label="${productName.toLowerCase()}"]`,
  );

  await suggestion.click();

  const product = page.locator(
    `//div[@data-cy="reviews-block"]
    /descendant::span[@class="a-size-small a-color-base" and contains(., "${rating}")]
    /ancestor::div[@data-cy="asin-faceout-container"]
    /descendant::div[@data-cy="title-recipe"]
    /descendant::h2[contains(., "${productName}")]`,
  );

  const productText = await product.allTextContents();

  console.log("Product Names:", productText);
  console.log("Product Count:", productText.length);

  await product.first().click();
});