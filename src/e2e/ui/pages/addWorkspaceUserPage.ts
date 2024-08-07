import {expect, Page} from '@playwright/test';

export class AddWorkspaceUserPage {
    private page: Page;

   get settingIcon(){
       return this.page.locator("//i[@id='isax-outline' and contains(@class, 'isax-setting-2')]")
   }
   get addUserBtn(){
       return this.page.locator("(//span[text()='Add User'])[2]")
   }
   get usersOption(){
       return this.page.locator("(//span[text()='Users'])[1]")
   }
   get addUserPopUp(){
       return this.page.locator("//div[@class='dls-txt-h5' and text()='Add User']")
   }
   get emailField() {
       return this.page.locator("input[placeholder='Email Address']")
   }
   get accessLevelDropdown(){
       return this.page.locator("//div[@class='v-select__selection']")
   }
   get addButton(){
        return this.page.locator("//span[text()='Add']")
   }
   get addedUser(){
        return this.page.locator("//div[text()='Owner - faiza.aslam2@yopmail.com']")
   }

   constructor(page: Page) {
        this.page = page;
   }

    // Actions
    async clickOnSettingIcon() {
       await this.settingIcon.waitFor({ state: 'visible' })
       await this.settingIcon.click();
    }
    async clickOnUserOption(){
        await this.usersOption.click();
    }
    async clickOnAddUserButton(){
       await this.addUserBtn.click();
    }
    async enterEmailAddress(email:string){
       await this.emailField.type(email);
    }
    async selectAccessLevel(access:string){
       await this.accessLevelDropdown.click()
       await this.page.waitForTimeout(2000)
       await this.page.locator("//div[@class='v-list-item-title' and text()='"+access+"']").click()
    }
    async clickOnAddButton(){
       await  this.addButton.click();
    }


}
