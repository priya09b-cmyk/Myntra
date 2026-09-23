test ('upload',async ({page}) => {
    await page.goto('https://demoqa.com/login');
    await page.setInputfiles("uploadfile',")
}