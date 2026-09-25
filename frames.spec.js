import { test } from '@playwright/test';
test('Frame handling', async ({ page }) =>{
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');
    await page.locator('//div[@rel-title="iFrame"]').click();

    const frame = page.frameLocator('//iframe[@name="globalSqa"]');
    await frame.locator('//h3[text()="JMeter Training"]/ancestor::a').click();
    let frame1 = await frame.locator('//h3[text()="Mobile Application Testing Training"]/ancestor::a').click();
// console.log(frame1);
    // await page.waitForTimeout(4000);)
    // });
