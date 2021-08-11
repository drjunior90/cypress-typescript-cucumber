# Cypress, Typescript and Cucumber - Todo App

## Overview

This is a sample project for getting started with Cypress, Typescript and Cucumber. The tests created for
the [Todo App](https://todomvc.com/examples/react/#/) are documented as scenarios in feature files with Cucumber:

* Feature files describing the scenarios can be found in: `/src/features`

## Cypress

Cypress comes fully baked, batteries included. Here is a list of things it can do that no other testing framework can:

- **Time Travel:** Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what
  happened at each step.
- **Debuggability:** Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools.
  Our readable errors and stack traces make debugging lightning fast.
- **Automatic Waiting:** Never add waits or sleeps to your tests. Cypress automatically waits for commands and
  assertions before moving on. No more async hell.
- **Spies, Stubs, and Clocks:** Verify and control the behavior of functions, server responses, or timers. The same
  functionality you love from unit testing is right at your fingertips.
- **Network Traffic Control:** Easily control, stub, and test edge cases without involving your server. You can stub
  network traffic however you like.
- **Consistent Results:** Our architecture doesn't use Selenium or WebDriver. Say hello to fast, consistent and reliable
  tests that are flake-free.
- **Screenshots and Videos:** View screenshots taken automatically on failure, or videos of your entire test suite when
  run from the CLI.
- **Cross browser Testing:** Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally
  and optimally in a Continuous Integration pipeline.

## Cucumber

Cucumber is a tool based on Behavior Driven Development (BDD) framework which is used to write acceptance tests for
applications. It allows automation of functional validation in easily readable and understandable format (like plain
English) to Business Analysts, Developers, Testers, and other stakeholders. Some benefits of BDD in Cucumber Framework

- Focuses on defining `behavior` rather than defining `tests`
- Enhances communication among the members of a cross-functional product team
- Helps reach a wider audience by the usage of non-technical language
- Enables you to understand how the system should perform from the developer’s and customer’s perspective
- The improvement in the quality of code results in reduced costs of maintenance and also minimizes the project’s
  associated risks

## Installing dependencies

In order to install necessary dependencies, the following command should be executed from project root:

`yarn install`

## Running tests

The following commands are available:

| Script name           | Description                                                       |
| --------------------- | ------------------------------------------------------------------|
| `yarn cy-open`        | run tests in visual mode with Cypress Test Runner                 |
| `yarn cy-run`         | run tests in electron in headless mode and generates test report  |
| `yarn cy-run:chrome`  | run tests in chrome in headless mode and generates test report    |
| `yarn cy-run:edge`    | run tests in edge in headless mode and generates test report      |
| `yarn cy-run:firefox` | run tests in firefox in headless mode and generates test report   |

## Test Results

The Cucumber report and Videos from test execution are generated as part of running the tests in the headless mode:

* Generated HTML report can be found: `/cypress/reports/cucumber/index.html`
* Videos of test execution can be found: `/cypress/reports/videos`

![report](https://user-images.githubusercontent.com/27835328/128998479-d98357fc-ce9c-43df-af89-752186ebbcf4.PNG)
