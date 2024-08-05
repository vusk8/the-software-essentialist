# Problem Description

Description:
Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result

## Test case:

1. Single Value:
  "TRUE" -> true "FALSE" -> false
2. NOT operator
  "NOT TRUE" -> false
3. AND operator
  "TRUE AND FALSE" -> false "TRUE AND TRUE" -> true
4. OR operator
  "TRUE OR FALSE" -> true "FALSE OR FALSE" -> false
5. Combination of operators w/ precedence
   It should allow you to provide any combination of the operators, but it should give precedence in this order:
   - NOT
   - AND
   - OR
   Eg:
    - "TRUE OR TRUE OR TRUE AND FALSE" -> true
    - "TRUE OR FALSE AND NOT FALSE" -> true
    - "TRUE AND FALSE OR FALSE AND NOT TRUE" -> false
6. Parenthesis
   "(TRUE OR TRUE OR TRUE) AND FALSE" -> false "NOT (TRUE AND TRUE)" -> false

## Grading Checklist
 🔘 I have implemented the minimum requirements listed in the project description
 🔘 I have Programmed By Wishful Thinking, designing the response API before it was actually created
 🔘 I have Worked Backwards, starting at the Assert, then going to the Act and the Arrange
 🔘 Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization
 🔘 There is no duplication in my test code or my production code
 🔘 I have attempted to implement the simplest possible Transformations according to the Transformation Priority Premise table.

