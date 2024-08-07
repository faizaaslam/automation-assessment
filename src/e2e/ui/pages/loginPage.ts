import {expect, Page} from '@playwright/test';

export class LoginPage {
    private page: Page;

    // Page Objects
    get signInHeading() {
        return this.page.locator("//div[text()='Sign in']");
    }
    get emailField(){
        return this.page.locator("#input-7")
    }
    get passwordField(){
        return this.page.locator("#input-9")
    }
    get signInButton(){
        return this.page.locator("button[type='submit']")
    }
    get dashboard(){
        return this.page.locator("//div[text()='Dashboard']")
    }
    get invalidCredentialErrMsg(){
        return this.page.locator("//div[text()='Invalid username or password']")
    }
    constructor(page: Page) {
        this.page = page;
    }

    // Actions
    async enterEmail(email:string) {
        await this.emailField.type(email);
    }
    async enterPassword(password:string){
        await this.passwordField.type(password);
    }
    async clickOnSignInButton(){
        await this.signInButton.click();
        await this.page.waitForTimeout(2000)
    }
}
