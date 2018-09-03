/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import ProductComponentsPage from './product.page-object';
import ProductUpdatePage from './product-update.page-object';

const expect = chai.expect;

describe('Product e2e test', () => {
  let navBarPage: NavBarPage;
  let productUpdatePage: ProductUpdatePage;
  let productComponentsPage: ProductComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Products', async () => {
    navBarPage.getEntityPage('product');
    productComponentsPage = new ProductComponentsPage();
    expect(await productComponentsPage.getTitle().getText()).to.match(/Products/);
  });

  it('should load create Product page', async () => {
    productComponentsPage.clickOnCreateButton();
    productUpdatePage = new ProductUpdatePage();
    expect(await productUpdatePage.getPageTitle().getAttribute('id')).to.match(/gatewayApp.onlineshopProduct.home.createOrEditLabel/);
  });

  it('should create and save Products', async () => {
    productUpdatePage.setTitleInput('title');
    expect(await productUpdatePage.getTitleInput()).to.match(/title/);
    productUpdatePage.setKeywordsInput('keywords');
    expect(await productUpdatePage.getKeywordsInput()).to.match(/keywords/);
    productUpdatePage.setDescriptionInput('description');
    expect(await productUpdatePage.getDescriptionInput()).to.match(/description/);
    productUpdatePage.setRatingInput('5');
    expect(await productUpdatePage.getRatingInput()).to.eq('5');
    productUpdatePage.setDateAddedInput('01-01-2001');
    expect(await productUpdatePage.getDateAddedInput()).to.eq('2001-01-01');
    productUpdatePage.setDateModifiedInput('01-01-2001');
    expect(await productUpdatePage.getDateModifiedInput()).to.eq('2001-01-01');
    await productUpdatePage.save();
    expect(await productUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
