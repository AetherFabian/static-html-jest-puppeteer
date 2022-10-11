const puppeteer = require('puppeteer');

async function init(website) {
    
    try{
        const browser = await puppeteer.launch({
            headless: true,
        });

        const page = await browser.newPage();
        await page.goto(website);

        const title = await page.title();
        await browser.close();
        return title;
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = init;