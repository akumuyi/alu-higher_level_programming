JavaScript Object-Oriented Programming Tasks

This repository contains a series of JavaScript tasks related to object-oriented programming concepts. Each task focuses on defining classes and methods, working with objects, and practicing inheritance and encapsulation.

## Task 0: Rectangle #0

In this task, you are required to define an empty class called `Rectangle` using the class notation. The `Rectangle` class serves as a basic template for creating instances of rectangles.

## Task 1: Rectangle #1

This task builds upon Task 0 by extending the `Rectangle` class to include a constructor that takes two arguments, `w` (width) and `h` (height). It initializes the instance attributes `width` and `height` with the provided values.


## Task 2: Rectangle #2

In this task, you continue to enhance the `Rectangle` class by adding checks in the constructor. If either `w` or `h` is equal to 0 or not a positive integer, an empty object is created.

## Task 3: Rectangle #3

In this task, you add an instance method called `print()` to the `Rectangle` class. This method prints the rectangle using the character "X." The width and height of the rectangle determine its dimensions.

## Task 4: Rectangle #4

This task extends the `Rectangle` class further by adding two additional instance methods: `rotate()` and `double()`. The `rotate()` method exchanges the width and height of the rectangle, while the `double()` method multiplies both the width and height by 2.

## Task 5: Square #0

This task introduces a `Square` class that inherits from the `Rectangle` class created in previous tasks. The `Square` class takes one argument, `size`, in its constructor and initializes both the `width` and `height` attributes with the value of `size`.


## Task 6: Square #1

In this task, you extend the `Square` class by adding an instance method called `charPrint(c)`. This method prints the square using the specified character `c`. If `c` is undefined, it defaults to using "X."

## Task 7: Occurrences

This task involves writing a function `nbOccurences(list, searchElement)` that returns the number of occurrences of `searchElement` in a given list.

## Task 8: Esrever

In this task, you implement a function `esrever

(list)` that reverses the order of elements in a list without using the built-in `reverse` method.


## Task 9: Log me

This task involves writing a function `logMe(item)` that prints the number of arguments already printed and the new argument value in a specific format.

## Task 10: Number conversion

In this task, you implement a higher-order function `converter(base)` that returns a function for converting a number from base 10 to another base passed as an argument.
