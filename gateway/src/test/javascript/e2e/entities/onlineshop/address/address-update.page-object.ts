import { element, by, ElementFinder } from 'protractor';

export default class AddressUpdatePage {
  pageTitle: ElementFinder = element(by.id('gatewayApp.onlineshopAddress.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  address1Input: ElementFinder = element(by.css('input#address-address1'));
  address2Input: ElementFinder = element(by.css('input#address-address2'));
  cityInput: ElementFinder = element(by.css('input#address-city'));
  postcodeInput: ElementFinder = element(by.css('input#address-postcode'));
  countryInput: ElementFinder = element(by.css('input#address-country'));

  getPageTitle() {
    return this.pageTitle;
  }

  setAddress1Input(address1) {
    this.address1Input.sendKeys(address1);
  }

  getAddress1Input() {
    return this.address1Input.getAttribute('value');
  }

  setAddress2Input(address2) {
    this.address2Input.sendKeys(address2);
  }

  getAddress2Input() {
    return this.address2Input.getAttribute('value');
  }

  setCityInput(city) {
    this.cityInput.sendKeys(city);
  }

  getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  setPostcodeInput(postcode) {
    this.postcodeInput.sendKeys(postcode);
  }

  getPostcodeInput() {
    return this.postcodeInput.getAttribute('value');
  }

  setCountryInput(country) {
    this.countryInput.sendKeys(country);
  }

  getCountryInput() {
    return this.countryInput.getAttribute('value');
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
