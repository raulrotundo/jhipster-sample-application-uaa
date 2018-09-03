import { element, by, ElementFinder } from 'protractor';

export default class CategoryUpdatePage {
  pageTitle: ElementFinder = element(by.id('gatewayApp.onlineshopCategory.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  descriptionInput: ElementFinder = element(by.css('input#category-description'));
  sortOrderInput: ElementFinder = element(by.css('input#category-sortOrder'));
  dateAddedInput: ElementFinder = element(by.css('input#category-dateAdded'));
  dateModifiedInput: ElementFinder = element(by.css('input#category-dateModified'));
  statusSelect: ElementFinder = element(by.css('select#category-status'));

  getPageTitle() {
    return this.pageTitle;
  }

  setDescriptionInput(description) {
    this.descriptionInput.sendKeys(description);
  }

  getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  setSortOrderInput(sortOrder) {
    this.sortOrderInput.sendKeys(sortOrder);
  }

  getSortOrderInput() {
    return this.sortOrderInput.getAttribute('value');
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

  setStatusSelect(status) {
    this.statusSelect.sendKeys(status);
  }

  getStatusSelect() {
    return this.statusSelect.element(by.css('option:checked')).getText();
  }

  statusSelectLastOption() {
    this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
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
