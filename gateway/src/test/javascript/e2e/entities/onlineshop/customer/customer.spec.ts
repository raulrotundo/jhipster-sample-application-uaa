/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CustomerComponentsPage from './customer.page-object';
import CustomerUpdatePage from './customer-update.page-object';

const expect = chai.expect;

describe('Customer e2e test', () => {
  let navBarPage: NavBarPage;
  let customerUpdatePage: CustomerUpdatePage;
  let customerComponentsPage: CustomerComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Customers', async () => {
    navBarPage.getEntityPage('customer');
    customerComponentsPage = new CustomerComponentsPage();
    expect(await customerComponentsPage.getTitle().getText()).to.match(/Customers/);
  });

  it('should load create Customer page', async () => {
    customerComponentsPage.clickOnCreateButton();
    customerUpdatePage = new CustomerUpdatePage();
    expect(await customerUpdatePage.getPageTitle().getAttribute('id')).to.match(/gatewayApp.onlineshopCustomer.home.createOrEditLabel/);
  });

  it('should create and save Customers', async () => {
    customerUpdatePage.setFirstNameInput('firstName');
    expect(await customerUpdatePage.getFirstNameInput()).to.match(/firstName/);
    customerUpdatePage.setLastNameInput('lastName');
    expect(await customerUpdatePage.getLastNameInput()).to.match(/lastName/);
    customerUpdatePage.setEmailInput('email');
    expect(await customerUpdatePage.getEmailInput()).to.match(/email/);
    customerUpdatePage.setTelephoneInput('telephone');
    expect(await customerUpdatePage.getTelephoneInput()).to.match(/telephone/);
    await customerUpdatePage.save();
    expect(await customerUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
