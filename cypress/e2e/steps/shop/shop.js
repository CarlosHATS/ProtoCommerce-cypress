import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import shopProductPage from "../../../pages/shopProductPage"
import shopCheckoutPage from "../../../pages/shopCheckoutPage"
import data from "../../../fixtures/data.json"

let selectProduct;

Given(`that I access the shop page`, () => {
    // shopHomeForm.getShopButton().contains(`Shop`).click();
    cy.visit(`https://rahulshettyacademy.com/angularpractice/shop`)
});

When(`clicking on the add button of the desired product`, (text) => {
    data.productName.forEach(function (element) {  //criar um array pelo json e depois pegar o comando 
        cy.selectProduct(element);
    });
});


When(`I click on the checkout button in product page`, () => {
    shopProductPage.getCheckoutButton().click();
});

When('I check if the selected product is in the checkout list', () => {
    When('check if the selected product is in the checkout list', () => {
        data.productName.forEach(function (element) {
            cy.get(`.media-body h4 a`).each(($el) => {
                cy.wrap($el).invoke('text').then((text) => {
                    if (text.trim() === element) {
                        cy.wrap($el).should('contain.text', element);
                    }
                });
            });
        });
    });
});

When(`I click on the checkout button in product checkout page`, () => {
    shopCheckoutPage.getChackoutButton().click();
});

When(`I select the country`, () => {
    shopCheckoutPage.getCountry().type(`India`).then(function () {
        cy.contains(`a`, `India`).click();
    })
});

When(`I click on the agree checbox`, () => {
    shopCheckoutPage.getAgreeCheckbox().click({ force: true });
});

When(`I click on the purchase button`, () => {
    shopCheckoutPage.getPurchaseButton().click();
});

Then(`The message of succees is visible`, () => {
    shopCheckoutPage.getSuccessMessage().should(`contain.text`, `Success!`);
});



// When(`click the submit button`, () => {
//   shopHomeForm.getSubmitForm().click();
// });

// Then(`the success message is displayed`, () => {
//   shopHomeForm.getMessageSucces().contains(`Success!`).should(`be.visible`);
// });