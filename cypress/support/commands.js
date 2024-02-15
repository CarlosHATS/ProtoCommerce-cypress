Cypress.Commands.add(`selectProduct`, (productName)=>{
    cy.get(`h4.card-title`).each(($el, index, $list) => {
        const elementText = $el.text().toLowerCase();
        const productNameLower = productName.toLowerCase();

        if (elementText.includes(productNameLower)) {
            cy.get(`button[class="btn btn-info"]`).eq(index).click();
        }
    });

});