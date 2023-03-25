const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // More info https://www.toolsqa.com/cypress/configurations-in-cypress/
  
  // Global options
  viewportHeight: 1024,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {

      // Environment config handling 
      const version = config.env.version || 'local'
      config.env = require(`./cypress/config/${version}.json`);
      // change baseUrl
      config.baseUrl = config.env.baseUrl

      return config
    },
    specPattern : 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}', // overwrithe the default e2e folder
   
  },
});
