// requirework like import
const report = require("multiple-cucumber-html-reporter");
//invoke report
report.generate({
  jsonDir: "test-results",
  reportPath: "./path-where-the-report-needs-to-be/",
  reportName: "Playwright Automation Report",
  pageTitle: "Lambda test Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "My Local Machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Lambda Test" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Smoke Test 1" }
    ],
  },
});