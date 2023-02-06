
const puppeteer = require('puppeteer');


tennisRankingCheckInternet();

/* Template 
async function tennisRankingCheck(){
    const browser = await puppeteer.launch( {headless: false});
    const page = await browser.newPage();
    await page.goto("https://live-tennis.eu/en/atp-live-ranking")
    const status = await page.$eval('.', el => el.innerHTML)
    console.log(  + "The top ranked player is " + status)
    await browser.close()
}; 
*/


async function tennisRankingCheckInternet(){
    const browser = await puppeteer.launch( {headless: false});
    const page = await browser.newPage();
    await page.goto("https://live-tennis.eu/en/atp-live-ranking")

    const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('tr'))
    return tds.map(td => td.innerText)
    });
    console.log("Player Number 1 " + data[28]);
    console.log("Player Number 2 " + data[29]);
    console.log("Player Number 3 " + data[30]);
    await browser.close();

}; 