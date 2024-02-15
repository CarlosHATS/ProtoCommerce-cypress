class shopCheckoutPage {

    getChackoutButton() {
        return cy.contains(`Checkout `);
    }

    getCountry() {
        return cy.get(`#country `);
    }

    getAgreeCheckbox() {
        return cy.get(`#checkbox2`);
    };

    getPurchaseButton() {
        return cy.get(`input[value="Purchase"]`);
    };

    getSuccessMessage(){
        return cy.contains(`strong`, `Success!`);
    }

}
export default new shopCheckoutPage;