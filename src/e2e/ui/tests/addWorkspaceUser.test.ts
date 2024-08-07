import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AddWorkspaceUserPage } from '../pages/addWorkspaceUserPage';
import testData from "../../test-data/loginTestData.json";
import workspaceUserTestData from "../../test-data/addWorkspaceTestData.json";

test.describe('Workspace User Flow Test Suite', () => {

    let loginPage: LoginPage;
    let addWorkspaceUserPage: AddWorkspaceUserPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        addWorkspaceUserPage = new AddWorkspaceUserPage(page);
        await page.goto('/');
        await loginPage.enterEmail(testData.email);
        await loginPage.enterPassword(testData.password);
        await loginPage.clickOnSignInButton();
    });

    test('@Functional TC01-Verify workspace add user functionality is working as expected.', async () => {
        await addWorkspaceUserPage.clickOnSettingIcon();
        await addWorkspaceUserPage.clickOnUserOption();
        await addWorkspaceUserPage.clickOnAddUserButton();
        expect(await addWorkspaceUserPage.addUserPopUp).toBeVisible();
        await addWorkspaceUserPage.enterEmailAddress();
        await addWorkspaceUserPage.selectAccessLevel(workspaceUserTestData.accessLevel);
        await addWorkspaceUserPage.clickOnAddButton();
        await addWorkspaceUserPage.verifyUserHasBeenAdded(workspaceUserTestData.accessLevel);
    });
});
