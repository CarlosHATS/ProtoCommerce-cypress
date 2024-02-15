class shopHomeForm {

    getName() {
        return cy.get(`input[name="name"]:nth-child(2)`);
    };

    getEmail() {
        return cy.get(`input[name="email"]`);
    };

    getPassword() {
        return cy.get(`#exampleInputPassword1`);
    };

    getCheckButton() {
        return cy.get(`#exampleCheck1`);
    };

    getGender() {
        return cy.get(`select`);
    };

    getStatus() {
        return cy.contains(`label`, `Student`);
    };

    getRadioDisabled() {
        return cy.get(`#inlineRadio3`);
    };

    getBirth() {
        return cy.get(`input[type="date"]`);
    };

    getSubmitForm() {
        return cy.get(`input[type="submit"]`);
    };

    getTwoWay() {
        return cy.get(`input[name="name"]:nth-child(1)`);
    };

    getShopButton() {
        return cy.get(`a[class="nav-link"]`);
    };

    getMessageSucces() {
        return cy.get(`strong`);
    };

};
export default new shopHomeForm;
