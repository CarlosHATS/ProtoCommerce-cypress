const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/steps/*.feature',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 5000,
  },
});
