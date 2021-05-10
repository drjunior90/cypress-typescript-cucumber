Feature: Remove todo items from Todo List App

  In order to clear my todo list
  As a user
  I want to remove todo items from my todo list

  Background: User has an empty todo list
    Given that user has an empty todo list

  Scenario: Removing an item from the todo list
    Given the user added the following items to the list
      | Walk the dog |
      | Haircut      |
      | Read a book  |
    When the user removes the todo item "Haircut"
    Then the todo list should not contain the item "Haircut"
    And the todo list should contain 2 items left
