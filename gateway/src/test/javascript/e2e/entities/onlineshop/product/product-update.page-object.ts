import { element, by, ElementFinder } from 'protractor';

export default class ProductUpdatePage {
  pageTitle: ElementFinder = element(by.id('gatewayApp.onlineshopProduct.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  titleInput: ElementFinder = element(by.css('input#product-title'));
  keywordsInput: ElementFinder = element(by.css('input#product-keywords'));
  descriptionInput: ElementFinder = element(by.css('input#product-description'));
  ratingInput: ElementFinder = element(by.css('input#product-rating'));
  dateAddedInput: ElementFinder = element(by.css('input#product-dateAdded'));
  dateModifiedInput: ElementFinder = element(by.css('input#product-dateModified'));

  getPageTitle() {
    return this.pageTitle;
  }

  setTitleInput(title) {
    this.titleInput.sendKeys(title);
  }

  getTitleInput() {
    return this.titleInput.getAttribute('value');
  }

  setKeywordsInput(keywords) {
    this.keywordsInput.sendKeys(keywords);
  }

  getKeywordsInput() {
    return this.keywordsInput.getAttribute('value');
  }

  setDescriptionInput(description) {
    this.descriptionInput.sendKeys(description);
  }

  getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  setRatingInput(rating) {
    this.ratingInput.sendKeys(rating);
  }

  getRatingInput() {
    return this.ratingInput.getAttribute('value');
  }

  setDateAddedInput(dateAdded) {
    this.dateAddedInput.sendKeys(dateAdded);
  }

  getDateAddedInput() {
    return this.dateAddedInput.getAttribute('value');
  }

  setDateModifiedInput(dateModified) {
    this.dateModifiedInput.sendKeys(dateModified);
  }

  getDateModifiedInput() {
    return this.dateModifiedInput.getAttribute('value');
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
