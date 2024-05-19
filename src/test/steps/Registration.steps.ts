import { expect } from '@playwright/test';
import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixtures';

setDefaultTimeout (60 * 1000 * 2);

Given('Launch Application', async function () {
    await pageFixture.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

When('User clicks on {string} link', async function (linkName:string) {
    await pageFixture.page.getByRole('link', {name: linkName}).click();
});

When('User clicks on {string} button', async function (buttonName:string) {
    await pageFixture.page.getByRole('button', {name: buttonName}).click();
});

Then('User validates {string} text on page', async function(text: string) {
    await expect(pageFixture.page.getByText(text)).toBeVisible();
});

Then('User enters {string} text into {string} textbox', async function (inputText:string, textboxName:string) {
    await pageFixture.page.getByRole('textbox', {name: textboxName}).fill(inputText);
});

Then(/User checks '(.*)' checkbox/, async function (checkboxName:string) {
    await pageFixture.page.getByText(checkboxName).click();
});

Then('User enters email address in {string} textbox', async function (textboxName:string) {
    const emailAddress = generateRandomEmail(5, 'testdomain.com');
    await pageFixture.page.getByRole('textbox', {name: textboxName}).fill(emailAddress);
    console.log('Email Address is ' + emailAddress);
});

function generateRandomEmail(length: number = 10, domain: string = 'example.com'): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return 'auto_' + result + '@' + domain;
  }

  Then('User validates {string} heading on page', async function(text: string) {
    await expect(pageFixture.page.getByRole('heading', {name: text})).toBeVisible();
});