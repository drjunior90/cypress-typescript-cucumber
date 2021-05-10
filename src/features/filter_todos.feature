Feature: Filter todo items in Todo List App

  In order to organize and have a better view of things to do
  As a user
  I want to filter my todo items in my todo list

  Background: User has an empty todo list
    Given that user has an empty todo list

  Scenario Outline: Filtering todo items from the todo list
    Given the user added the following items to the list
      | Walk the dog |
      | Read a book  |
    And the user has completed the todo "Walk the dog"
    When the user filters "<filter>" items
    Then the todo list should include "<expected>"

    Examples:
      | filter    | expected                  |
      | Active    | Read a book               |
      | Completed | Walk the dog              |
      | All       | Walk the dog, Read a book |
