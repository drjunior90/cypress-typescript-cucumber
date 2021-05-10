import * as browserify from "@cypress/browserify-preprocessor";
import * as resolve from "resolve";
import cucumber from "cypress-cucumber-preprocessor";
import * as report from "multiple-cucumber-html-reporter";
import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;
import CypressRunResult = CypressCommandLine.CypressRunResult;

const plugins = (on: PluginEvents, config: PluginConfigOptions): void => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
  };

  on("file:preprocessor", cucumber(options));

  on("after:run", (result: CypressRunResult) => {
    report.generate({
      jsonDir: "cypress/reports/cucumber/json/",
      reportPath: "cypress/reports/cucumber/",
      metadata: {
        browser: {
          name: result.browserName,
          version: result.browserVersion,
        },
        environment: result.config.baseUrl,
        platform: {
          name: result.osName,
          version: result.osVersion,
        },
      },
      customData: {
        title: "Run info",
        data: [
          { label: "Project", value: "Todo App" },
          { label: "Release", value: "latest" },
          { label: "Execution Start Time", value: result.startedTestsAt },
          { label: "Execution End Time", value: result.endedTestsAt },
        ],
      },
    });
  });
};

export default plugins;
