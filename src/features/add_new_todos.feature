Feature: Add todo items to Todo List App

  In order to help me to remember things that I still need to do
  As a user
  I want to add new todo items to my todo list

  Scenario: Adding three items to an empty todo list
    Given that user has an empty todo list
    When the user adds the following items to the list
      | Walk the dog |
      | Haircut      |
      | Read a book  |
    Then the following items should be recorded in the todo list
      | Walk the dog |
      | Haircut      |
      | Read a book  |
