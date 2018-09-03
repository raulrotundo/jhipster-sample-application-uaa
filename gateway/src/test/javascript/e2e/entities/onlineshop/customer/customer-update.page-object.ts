import { element, by, ElementFinder } from 'protractor';

export default class CustomerUpdatePage {
  pageTitle: ElementFinder = element(by.id('gatewayApp.onlineshopCustomer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstNameInput: ElementFinder = element(by.css('input#customer-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#customer-lastName'));
  emailInput: ElementFinder = element(by.css('input#customer-email'));
  telephoneInput: ElementFinder = element(by.css('input#customer-telephone'));

  getPageTitle() {
    return this.pageTitle;
  }

  setFirstNameInput(firstName) {
    this.firstNameInput.sendKeys(firstName);
  }

  getFirstNameInput() {
    return this.firstNameInput.getAttribute('value');
  }

  setLastNameInput(lastName) {
    this.lastNameInput.sendKeys(lastName);
  }

  getLastNameInput() {
    return this.lastNameInput.getAttribute('value');
  }

  setEmailInput(email) {
    this.emailInput.sendKeys(email);
  }

  getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  setTelephoneInput(telephone) {
    this.telephoneInput.sendKeys(telephone);
  }

  getTelephoneInput() {
    return this.telephoneInput.getAttribute('value');
  }

  save() {
    return this.saveButton.click();
  }

  cancel() {
    this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
