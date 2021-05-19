const { chromium } = require("playwright");

async function main() {
    // Launch browser
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    // New page
    const page = await context.newPage();
    // Navigate to: https://web.gencat.cat/ca/inici
    await page.goto('https://web.gencat.cat/ca/inici');
    // To fill in the search input
    await page.fill('id=cercadorOcultGoogle', 'agenda cultural');
    // To click the search button
    await page.click('[aria-label="Cercar"]');

    // await browser.close();
}
main();
