const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o918qk",
  e2e: {
    pageLoadTimeout: 120000, // 2 minutes for page load
    defaultCommandTimeout: 10000, // 10s for commands like .get()
  },
});

