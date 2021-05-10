# Cypress, Typescript and Cucumber - Todo App

## Overview

This is a sample project for getting started with Cypress, Typescript and Cucumber. The tests created for the Todo App
are documented as scenarios in feature files with Cucumber:

* Feature files describing the scenarios can be found in: `/src/features`

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

## Test Results

The Cucumber report and Videos from test execution are generated as part of running the tests in the headless mode:

* Generated HTML report can be found: `/cypress/reports/cucumber/index.html`
* Videos of test execution can be found: `/cypress/reports/videos`
