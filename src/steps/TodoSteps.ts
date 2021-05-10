import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { Todo } from "../targets/Todo";

Given("that user has an empty todo list", () => {
  cy.visit("/");
  Todo.list().should("not.exist");
});

Given("the user has completed the todo {string}", (todo) => {
  cy.contains(todo).prev("input").check();
});

When("the user adds/added the following items to the list", (dataTable) => {
  const todos = dataTable.raw();
  todos.forEach((todo) => Todo.newTodoInput().type(`${todo}{enter}`));
});

When("the user removes the todo item {string}", (todo) => {
  cy.contains(todo).next().click({ force: true });
});

When("the user filters {string} items", (filter) => {
  cy.get(".filters").contains(filter).click();
});

Then("the following items should be recorded in the todo list", (dataTable) => {
  const todos = dataTable.raw();
  todos.forEach((todo) => Todo.list().should("contain.text", todo));
  Todo.list().should("have.length", todos.length);
});

Then("the todo list should not contain the item {string}", (todo) => {
  Todo.list().should("not.contain", todo);
});

Then("the todo list should contain {int} items left", (itemsLeft) => {
  Todo.list().should("have.length", itemsLeft);
});

Then("the todo list should include {string}", (todos) => {
  const todosArr = todos.split(",").map((item) => item.trim());
  todosArr.forEach((todo) => {
    Todo.list().should("contain.text", todo);
  });
  Todo.list().should("have.length", todosArr.length);
});
