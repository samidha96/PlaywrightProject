import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { pageFixture } from "./pageFixtures";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";

let browser: Browser;
let page: Page;
let browserContext: BrowserContext;

//Before all feature files
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

//before each scenario
Before(async function () {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    pageFixture.page = page;
});

//after each scenario
After(async function ({ pickle, result }) {
    if(result?.status === Status.FAILED){
        //Take screesnhot after every failed scenario
    const img = await pageFixture.page.screenshot({path: `.test-result/screenshots/${pickle.name}.png`, type: 'png'});
    await this.attach(img, 'image/png');
    }        
    await pageFixture.page.close();
    await browserContext.close(); 
});

//after all feature files
AfterAll(async function () {
    await browser.close();    
});