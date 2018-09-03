/* tslint:disable no-unused-expression */
import { browser } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import CategoryComponentsPage from './category.page-object';
import CategoryUpdatePage from './category-update.page-object';

const expect = chai.expect;

describe('Category e2e test', () => {
  let navBarPage: NavBarPage;
  let categoryUpdatePage: CategoryUpdatePage;
  let categoryComponentsPage: CategoryComponentsPage;

  before(() => {
    browser.get('/');
    navBarPage = new NavBarPage();
    navBarPage.autoSignIn();
  });

  it('should load Categories', async () => {
    navBarPage.getEntityPage('category');
    categoryComponentsPage = new CategoryComponentsPage();
    expect(await categoryComponentsPage.getTitle().getText()).to.match(/Categories/);
  });

  it('should load create Category page', async () => {
    categoryComponentsPage.clickOnCreateButton();
    categoryUpdatePage = new CategoryUpdatePage();
    expect(await categoryUpdatePage.getPageTitle().getAttribute('id')).to.match(/gatewayApp.onlineshopCategory.home.createOrEditLabel/);
  });

  it('should create and save Categories', async () => {
    categoryUpdatePage.setDescriptionInput('description');
    expect(await categoryUpdatePage.getDescriptionInput()).to.match(/description/);
    categoryUpdatePage.setSortOrderInput('5');
    expect(await categoryUpdatePage.getSortOrderInput()).to.eq('5');
    categoryUpdatePage.setDateAddedInput('01-01-2001');
    expect(await categoryUpdatePage.getDateAddedInput()).to.eq('2001-01-01');
    categoryUpdatePage.setDateModifiedInput('01-01-2001');
    expect(await categoryUpdatePage.getDateModifiedInput()).to.eq('2001-01-01');
    categoryUpdatePage.statusSelectLastOption();
    await categoryUpdatePage.save();
    expect(await categoryUpdatePage.getSaveButton().isPresent()).to.be.false;
  });

  after(() => {
    navBarPage.autoSignOut();
  });
});
