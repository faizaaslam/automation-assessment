import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import testData from '../../test-data/loginTestData.json';
import exp from "constants";

test.describe('Respond.io Login Flow Automation', () => {

    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('/');
        expect(await loginPage.signInHeading).toBeVisible();
    });

    test('@Functional TC01-Verify user is able to successfully login with valid data', async () => {
        await loginPage.enterEmail(testData.email)
        await loginPage.enterPassword(testData.password)
        await loginPage.clickOnSignInButton();
        await loginPage.dashboard.waitFor({ state: 'visible' });
        expect(await loginPage.dashboard).toBeVisible();
    });

    test('@Functional TC02-Verify user should see error message when trying to login with invalid credential', async () => {
        await loginPage.enterEmail(testData.invalidEmail)
        await loginPage.enterPassword(testData.password)
        await loginPage.clickOnSignInButton();
        expect(await loginPage.invalidCredentialErrMsg).toBeVisible();
    });


});
