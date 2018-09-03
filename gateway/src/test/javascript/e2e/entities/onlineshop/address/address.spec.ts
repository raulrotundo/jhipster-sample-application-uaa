/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import AddressComponentsPage from './address.page-object';
import AddressUpdatePage from './address-update.page-object';

const expect = chai.expect;

describe('Address e2e test', () => {
  let navBarPage: NavBarPage;
  let addressUpdatePage: AddressUpdatePage;
  let addressComponentsPage: AddressComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Addresses', async () => {
    navBarPage.getEntityPage('address');
    addressComponentsPage = new AddressComponentsPage();
    expect(await addressComponentsPage.getTitle().getText()).to.match(/Addresses/);
  });

  it('should load create Address page', async () => {
    addressComponentsPage.clickOnCreateButton();
    addressUpdatePage = new AddressUpdatePage();
    expect(await addressUpdatePage.getPageTitle().getAttribute('id')).to.match(/gatewayApp.onlineshopAddress.home.createOrEditLabel/);
  });

  it('should create and save Addresses', async () => {
    addressUpdatePage.setAddress1Input('address1');
    expect(await addressUpdatePage.getAddress1Input()).to.match(/address1/);
    addressUpdatePage.setAddress2Input('address2');
    expect(await addressUpdatePage.getAddress2Input()).to.match(/address2/);
    addressUpdatePage.setCityInput('city');
    expect(await addressUpdatePage.getCityInput()).to.match(/city/);
    addressUpdatePage.setPostcodeInput('postcode');
    expect(await addressUpdatePage.getPostcodeInput()).to.match(/postcode/);
    addressUpdatePage.setCountryInput('country');
    expect(await addressUpdatePage.getCountryInput()).to.match(/country/);
    await addressUpdatePage.save();
    expect(await addressUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
