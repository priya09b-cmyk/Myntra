// import { test } from '@playwright/test';

// test('minimum price', async ({ page }) => {

//     await page.goto("https://www.myntra.com/kids-tshirts");

//     const prices = page.locator(
//         '//li[contains(@class,"product-base")]//descendant::span[contains(@class,"product-discountedPrice")]'
//     );

//     const allPrices = await prices.allTextContents();

//     console.log(allPrices);

//     const numbers = allPrices.map(p => parseInt(p.replace(/\D/g, "")));

//   const minPrice = Math.min(...numbers);

//     console.log("Minimum price:", minPrice);
//     });
    
import { test } from '@playwright/test';
test('Find minimum price', async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts");

  async function getMinPrice() {
    const allPrices = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]');
    const priceList = await allPrices.allTextContents();
    const prices = priceList.map(p => Number(p.replace(/\D/g, '')));
    const min = Math.min(...prices);
    const brand = await productBrand(min);
    console.log("Product Brand:", brand);
    return min;
  }

  async function productBrand(min) {
    const brand = page.locator("//span[@class='product-discountedPrice' or (text() and not(@class))][text()='${min}']/ancestor::li[@class='product-base']//h3[@class='product-brand']");
    return await brand.textContent();
  }

  console.log("Minimum Price:", await getMinPrice());
})