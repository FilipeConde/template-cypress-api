const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: '{API baseURL}',  //dependendo do projeto, usar variáveis de ambiente
    chromeWebSecurity: false,
    watchForFileChanges: false,
    video: false,
    screenshotOnRunFailure: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
  },
});
