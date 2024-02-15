class shopProductPage {

    getCheckoutButton() {
        return cy.get(`li[class="nav-item active"] a`);
    };

    getCheckboxAgree() {
        return cy.get(`#checkbox2`);
    };

};
export default new shopProductPage;
