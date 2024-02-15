import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import shopHomeForm from "../../../pages/shopHomeForm"
import data from '../../../fixtures/data.json'


Given(`that I access the website`, () => {
  cy.visit('https://rahulshettyacademy.com/angularpractice/');
});

When(`filling in name, email and password`, () => {
  shopHomeForm.getName().type(data.name);
  shopHomeForm.getName().should(`have.attr`, `minlength`, `2`)
  shopHomeForm.getEmail().type(data.email);
  shopHomeForm.getPassword().type(data.password);
});

When(`select the genre`, () => {
  shopHomeForm.getGender().contains(data.gender).then((selectOption) => {
    cy.get(`select`).select(selectOption.text()).should(`contains.value`, data.gender); //2° forma
  });
});

When(`select the employment status`, () => {
  shopHomeForm.getStatus().click();
});

When(`select the date of birth`, () => {
  shopHomeForm.getBirth().type(data.birth);
});

When(`click the submit button`, () => {
  shopHomeForm.getSubmitForm().click();
});

Then(`the success message is displayed`, () => {
  shopHomeForm.getMessageSucces().contains(`Success!`).should(`be.visible`);
});
