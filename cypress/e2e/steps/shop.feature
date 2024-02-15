Feature: End to end ecommerce validation

  Scenario: fill the form
    Given that I access the website
    When filling in name, email and password
    And select the genre
    And select the employment status
    And select the date of birth
    And click the submit button
    Then the success message is displayed

  Scenario: buy in ecommerce
    Given that I access the shop page
    When clicking on the add button of the desired product
    And I click on the checkout button in product page
    And I check if the selected product is in the checkout list
    And I click on the checkout button in product checkout page
    And I select the country
    And I click on the agree checbox
    And I click on the purchase button
    Then The message of succees is visible
