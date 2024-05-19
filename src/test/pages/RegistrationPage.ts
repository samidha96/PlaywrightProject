import { Locator, Page } from "@playwright/test";
import { pageFixture } from '../../hooks/pageFixtures';

export default class RegisterPage{

    constructor(public page: Page){

    }

    async getLinkByName(linkName: string): Promise<Locator>{
        return pageFixture.page.getByRole('link', {name: linkName, exact: true});
    }

    async getTextboxByName(inputName: string): Promise<Locator>{
        return pageFixture.page.getByRole('textbox', {name: inputName});
    }


    async clickOnButton(buttonName: string): Promise<Locator>{
        return pageFixture.page.getByRole('button', {name: buttonName, exact: true});
    }
}