const { chromium } = require("playwright");

async function main() {
    // Launch browser
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://web.gencat.cat/ca/inici');

    await page.fill('id=cercadorOcultGoogle', 'agenda cultural');

    await page.click('[aria-label="Cercar"]');

    // await browser.close();
}
main();
