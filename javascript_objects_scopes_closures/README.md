# README for JavaScript Object-Oriented Programming Tasks

This repository contains a series of JavaScript tasks related to object-oriented programming concepts. Each task focuses on defining classes and methods, working with objects, and practicing inheritance and encapsulation.

## Task 0: Rectangle #0

In this task, you are required to define an empty class called `Rectangle` using the class notation. The `Rectangle` class serves as a basic template for creating instances of rectangles.

**Usage:**

```javascript
const Rectangle = require('./0-rectangle');

const r1 = new Rectangle();
console.log(r1); // Output: Rectangle {}
console.log(r1.constructor); // Output: [Class: Rectangle]
```

## Task 1: Rectangle #1

This task builds upon Task 0 by extending the `Rectangle` class to include a constructor that takes two arguments, `w` (width) and `h` (height). It initializes the instance attributes `width` and `height` with the provided values.

**Usage:**

```javascript
const Rectangle = require('./1-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1); // Output: Rectangle { width: 2, height: 3 }
console.log(r1.width); // Output: 2
console.log(r1.height); // Output: 3
```

## Task 2: Rectangle #2

In this task, you continue to enhance the `Rectangle` class by adding checks in the constructor. If either `w` or `h` is equal to 0 or not a positive integer, an empty object is created.

**Usage:**

```javascript
const Rectangle = require('./2-rectangle');

const r1 = new Rectangle(2, 3);
console.log(r1); // Output: Rectangle { width: 2, height: 3 }

const r2 = new Rectangle(2, -3);
console.log(r2); // Output: {}

const r3 = new Rectangle(2);
console.log(r3); // Output: {}
```

## Task 3: Rectangle #3

In this task, you add an instance method called `print()` to the `Rectangle` class. This method prints the rectangle using the character "X." The width and height of the rectangle determine its dimensions.

**Usage:**

```javascript
const Rectangle = require('./3-rectangle');

const r1 = new Rectangle(2, 3);
r1.print();
// Output:
// XX
// XX
// XX

const r2 = new Rectangle(10, 5);
r2.print();
// Output:
// XXXXXXXXXXXX
// XXXXXXXXXXXX
// XXXXXXXXXXXX
// XXXXXXXXXXXX
// XXXXXXXXXXXX
```

## Task 4: Rectangle #4

This task extends the `Rectangle` class further by adding two additional instance methods: `rotate()` and `double()`. The `rotate()` method exchanges the width and height of the rectangle, while the `double()` method multiplies both the width and height by 2.

**Usage:**

```javascript
const Rectangle = require('./4-rectangle');

const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();
// Output:
// XX
// XX
// XX

console.log('Double:');
r1.double();
r1.print();
// Output:
// XXXX
// XXXX
// XXXX

console.log('Rotate:');
r1.rotate();
r1.print();
// Output:
// XXXXXX
// XXXXXX
```

## Task 5: Square #0

This task introduces a `Square` class that inherits from the `Rectangle` class created in previous tasks. The `Square` class takes one argument, `size`, in its constructor and initializes both the `width` and `height` attributes with the value of `size`.

**Usage:**

```javascript
const Square = require('./5-square');

const s1 = new Square(4);
s1.print();
// Output:
// XXXX
// XXXX
// XXXX
// XXXX

s1.double();
s1.print();
// Output:
// XXXXXXXXXXXX
// XXXXXXXXXXXX
// XXXXXXXXXXXX
// XXXXXXXXXXXX
```

## Task 6: Square #1

In this task, you extend the `Square` class by adding an instance method called `charPrint(c)`. This method prints the square using the specified character `c`. If `c` is undefined, it defaults to using "X."

**Usage:**

```javascript
const Square = require('./6-square');

const s1 = new Square(4);
s1.charPrint();
// Output:
// XXXX
// XXXX
// XXXX
// XXXX

s1.charPrint('C');
// Output:
// CCCC
// CCCC
// CCCC
// CCCC
```

## Task 7: Occurrences

This task involves writing a function `nbOccurences(list, searchElement)` that returns the number of occurrences of `searchElement` in a given list.

**Usage:**

```javascript
const nbOccurences = require('./7-occurrences').nbOccurences;

console.log(nbOccurences([1, 2, 3, 4, 5, 6], 3)); // Output: 1
console.log(nbOccurences([3, 2, 3, 4, 5, 3, 3], 3)); // Output: 4
console.log(nbOccurences(["S", 12, "c", "S", "School", 8], "S")); // Output: 2
```

## Task 8: Esrever

In this task, you implement a function `esrever

(list)` that reverses the order of elements in a list without using the built-in `reverse` method.

**Usage:**

```javascript
const esrever = require('./8-esrever').esrever;

console.log(esrever([1, 2, 3, 4, 5])); // Output: [ 5, 4, 3, 2, 1 ]
console.log(esrever(["School", 89, { id: 12 }, "String"])); // Output: [ 'String', { id: 12 }, 89, 'School' ]
```

## Task 9: Log me

This task involves writing a function `logMe(item)` that prints the number of arguments already printed and the new argument value in a specific format.

**Usage:**

```javascript
const logMe = require('./9-logme').logMe;

logMe("Hello"); // Output: 0: Hello
logMe("Best"); // Output: 1: Best
logMe("School"); // Output: 2: School
```

## Task 10: Number conversion

In this task, you implement a higher-order function `converter(base)` that returns a function for converting a number from base 10 to another base passed as an argument.

**Usage:**

```javascript
const converter = require('./10-converter').converter;

let myConverter = converter(10);

console.log(myConverter(2)); // Output: 2
console.log(myConverter(12)); // Output: c
console.log(myConverter(89)); // Output: 59

myConverter = converter(16);

console.log(myConverter(2)); // Output: 2
console.log(myConverter(12)); // Output: c
console.log(myConverter(89)); // Output: 59
```

Feel free to use these README instructions as a template for documenting each task in your GitHub repository.
