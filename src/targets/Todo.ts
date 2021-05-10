import Chainable = Cypress.Chainable;

export class Todo {
  public static list = (): Chainable<JQuery> => cy.get("ul.todo-list li");

  public static newTodoInput = (): Chainable<JQuery> => cy.get(".new-todo");
}
