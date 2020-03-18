/* JavaScript Notes from Bloc - 
  Program - instructions for a computer to carry out. 

-Strict Mode - Used to prevent creation of global variables, should be used at the top
of all javaScript files: */

'use strict';   // That's all you need to include. Then:

foo = 'bar'; // Will now raise a reference error, as not using let/const creates a global variable (don't want)





/* JavaScript Notes - is not a server-side language, it is a scripting language. 

You can use JavaScript in an html file under <script></script> tags, or youc can link a .JS file to your 
index using the below syntax. It seems this is not necessary to put in head, but body can work. */

<script src="file.js"></script>

/* Datatypes. specialized form of information (number, string, ect.). 

1. String - represents list of characters
2. Nubmer - represents an integer or decimal value
3. Boolean - true or false
4. Null - an empty value. 
5. Undefined - a value not yet defined.
6. Object - represent a group of key/value pairs.  - This is considered a complex data type, 
while the others are known as primitive data types. Arrays are included as an "object". Doing 
(typeof [1, 2, 3]); => 'object'.
-Debated- 7. Functions - if you run typeof function(){}), you get back "function".

 - Block doesn't count this as a data type: 
    -Date - date/time
    -Array: collection of data.

    
/* Boolean values - All values except for the below will evaluate to true. This
includes negative numbers, empty arrays and objects. Those will evaluate to true,
while the below evaluate to false. */

Boolean(false); // all return false
Boolean(""); // empty string
Boolean(0); 
Boolean(null);
Boolean(undefined);
Boolean(NaN);

/* Equality vs Strict Equality with coercion. "===" is strict equality, "==" equality. 
Take for example: */

true === 1; // returns false 

/* the above returns false because it is using strict equality, and they are not
of the same data type, no coercion. The first test is data type. If they were the same
data type, then the values would next be evaluated. 

== has a looser notion of equality. When comparing two values, if it finds they are of
different data types, it "coerces" one value to the type of the other. So, the below 
evaluates to true, becuase 1 evaluates to true in Boolean value. */

true == 1;




Division by zero is Infinity.
NaN means not a number. */ 

/* Coecion - When using two values that have different data types, Java scrip will force
one of the variables to the data type of the other. Ex: */

const stringVar = 'Kilroy was here ';
const numVar = 12;

const combined = stringVar + numVar;
typeof combined; // => string
console.log(combined); // => Kilroy was here 12

/* Determinate - in the context of functions, this means that providing the same arguements 
should produce the same results. 

Call Signature - refers to the () where arguments or parameters are passed to a function. 
You invoke a function by entering the function name with the "call signature". */

/* Default function parameters - in this case, the "default" value for the parameter of
power is set to 2, but can still be called with an argument of your choosing.*/

function tenPower(power = 2) {
  return 10 ** power;
}

tenPower(); // => 100
tenPower(1); // => 10
tenPower(3); // => 1000


// String Concatination. Combining strings! Ex:

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'


/* Special characters and escaping - like if you want quotation marks to appear, you need
to use an escape. We use \ backslash in order to escape. Ex:*/

const heSaid = "He said, \"Foo!\"";
console.log(heSaid); // He said, "Foo!"


// Properties - You can access properties of objects or instances by using dot noation.

console.log('Hello'.length); // Prints 5

// Methods - Methods are actions that we perform, you CALL, or use them. 

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

// Math Object - built-in functions that can be used on numbers. Ex:

console.log(Math.random()); // Prints a random number between 0 and 1

// Math.random() - This generates a number between 0-1 including decimals. to make this 
// generage a number between 0-n , you simply multiply by n. 

Math.random() * 50;

// If you want an integer, you must use the Math.floor() method on Math.random().

Math.floor(Math.random() * 50);

/* Variable - container for a value with a label. Variables can do 3 things:
1. Create a varible with a descriptive name
2. Store or update info stored in variable.
3. Reference or "get" info stored in variable. */

var myName = 'Arya';
console.log(myName);
// Output: Arya

// Math.pow() - Method. Return the value of the number 4 to the power of 3 (4 * 4 * 4):

Math.pow(4, 3);

// Math.sqrt() - Method. Returns the square root of a number passed as a parameter to the function: 

Math


/* Since ES6 in 2015, var is no longer the only keyword used to declare variables.

let - the variable can be reassigned a different value.  */

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

/* If you don't assign a value to a variable when delcared using let, it automatically 
has a value of undefined. */

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

/* const - short for constant, this declares a variable that cannot be reassigned because
it is constant. If you try to reassign a const variable, you will get a typeError.
They MUST be assigned a value when declared or you'll have a syntaxError. */

const entree = 'Enchiladas';

/* Mathematical or Arithmetic Operators - You can use them to assign new values: */

let w = 4;
w = w + 1;

console.log(w); // Output: 5

// Shorthand - perform the mathematical oepration of the fist operator + using the 
// number on the right, then reassigning w to the new value.

let w = 4;
w += 1;

console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// Increment and Decrement Operator 

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

/* Exponentiation is denoted with two ** */

let foo = 4;
let bar = foo * 2;
bar ** 2;

/* Prefix-postfix operators. There is a difference when the operator is on the left
or right side. In the below example, i++, the value is returned BEFORE the increment.
for ++j, the value is incremented first, and then returned. */


let i = 0;
let j = 0;

// postfix operator
let x = i++;

// prefix operator
let y = ++j;

console.log(x); // 0
console.log(i); // 1

console.log(y); // 1
console.log(j); // 1

/* Order of Operations - javaScript uses PEMDAS - Parenthesis, exponents, multiplication/division,
addition/subtraction. 



/* String Concatenation with Variables Ex: */

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// String Interpolation - Using template literals to embed variables into strings.
// Note those are back-ticks, NOT quotesEx: 

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

/* typeof operator. checks the value to its right and returns or passes
back a string of the data type. Ex: */

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

/* Conditionals/ Control Flow - checks specific conditions and performs a task based on the conditions. 
These include if, else if, and else statements. These use comparison operators, logical
operators, truth vs falsy values, ternary operators, and swtich statements. */

/* if () {} - The condition in the parentheses is evaluted to either true or false. If
true, the code block in the curly braces will run, or executes. */

if (true) {
    console.log('This message will print!'); 
  } 
  // Prints "This message will print!"

/* If... Else statements - if the condition evaluates to false, then the block of code
in the braces after else will run. */
  
  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!"

  /* Comparison Operators - <, >, <=, =>, ===, !=== */

  10 < 12 // Evaluates to true

  'apples' === 'oranges' // false

/* if/else/else if vs try/catch/finally blocks - (try, catch, finally) are for dealing
with conditiona logic in case of errors. Allow to specify a block of behavior that is to 
be tried (try block). If does not succeed, behavior in the "catch block runs. 
And whichever runs, the success or failure (try or catch), the finally block then runs
despite the outcome. Note that try and catch do not require a finally block.*/

try  {
  // this will raise an error because
  // nonExistentVariable is undefined
  nonexistentVariable += 'foo';
}
catch (err) {
 // this block runs if the try block fails. `e`
 // is an object representing the error
 console.log('Something went wrong');
 console.dir(err);
}
finally {
  console.log('This happens in both success and failure case!');
}

/* Note that in the above example, we made an error on purpose that would not work. Instead
of creating somethting that will break, you can simply use the "throw" keyword to "throw" or
intentionally raise an error: */

try {
  throw 'myException';
}
catch (err) {
  // do something
}

/* Logical Operators - These operators work with boolean values. && || ! 
In the below example, two conditions must be true, stopLight must equal 'green' AND 
pedestrians MUST equal 0.*/ 

  if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }

  /* Truty and Falsy - Sometimes you simply want to check if a variable exists, not necessarily 
  the specific value. Ex: */

  let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

/* These values actually evalute to falsy: 
    0
    Empty strings " " or ' '
    null which represents when there is no value at all
    NaN or Not a Number */

    let numberOfApples = 0;

    if (numberOfApples){
       console.log('Let us eat apples!');
    } else {
       console.log('No apples left!');
    }
    
    // Prints 'No apples left!'

/* Ternary Operator - simplifies an if...else statement. The condition is first,
if it's simply a variable it's checking the truthy value. Then two expressions follow a ?
and are seperated by a : colon. If true, the first expression executes, if false, the 
second expression executes. Ex: */

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// Becomes: 

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/* Else If Statements - You can add additional conditions with more then two outcomes. Ex: */

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

/* Switch - Further simplifying a multi-conditional if statement, the following: */

let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

/* Beomces: Note that the break; keyword tells the computer to exit the block and not 
execute any more code or check any other cases inside the code block. At the end, default: 
is used if no cases are true. */

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'

// The following example assigns a value to an empty variable depending on the value of weather: 

let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);

// This prints "Put on rain boots."

/* Functions - There are a few ways to create a function.

function declaration - a fucntion declaration binds a function to a name or an identifier: */

function greetWorld() {
    console.log('Hello, World!');
}   

/* Hoisting - The ability in JavaScript which allows access to function declarations before they're defined. */

console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}

/* Calling a function - . Ex: */

greetWorld();

/* Parameters and Arguemenmts - Functions can take inputs and then use those inputs
to perform tasks. We use "parameters" as placeholders for info that will be passed into 
functions. In the example below, width and height are parameters Ex: */

function calculateArea(width, height) {
    console.log(width * height);
}

calculateArea(10, 20);

// You can also use variables as arguemtns:

const rectWidth = 10;
const rectHeight = 2;

calculateArea(rectWidth, rectHeight);

/* Default Parameters - Since ES6, you can use default parameters. They allow for parameters 
to have a predetermined value in case there is no arugment passed into the fucntion. Ex: */

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  /* Return - when a computer runs through the code of a function, the resulting value
  is undefined. Notice in the previous examples that nothing printed outside of the 
  function itself. You must capture the result. Ex: */

  function rectangleArea(width, height) {
    let area = width * height 
  }
  console.log(rectangleArea(5, 7)) // Prints undefined

/* You must use the return keyword. This passes back information from the fucntion call. 
The execution fo the function stops at the return. */

  function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

/* Now that the function returns a value, you can even store that retun into other variables:*/

function monitorCount (rows, columns){
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);

  /* Helper Functions - You can use the return value of other functions inside of others:
*/

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  getFahrenheit(15); // Returns 59

  /* Function Expressions - Another way to define a function. You can define a function inside an expression. */

  const calculateArea = function(width, height) {
      const area = width * height;
      return area;
  };

  calculateArea(2 * 30);

  /* Arrow Functions - A shorter way to write functions. They remove the need to type
  the word function every time. Instead, you include the parameters inside the parentheses ()
  followed by an arrow => that points the function body {}; */

  const rectangleArea = (width, height) => {
    let area = width * height;
    return area
  }

  /* Note that if there is only ONE parameter, then no parantheses are required, only if it is 0 
  or multiple parameters: */

  const functionName = paramOne => {};  // one parameter

  const functionName = () => {};  // no parameters

  const functionName (param1, param2) => {}; // two parameters

  /* Additionally, a function body composed of a single line does not need curly braces:
  Also, I guess the return keyword is not contained in the "concise body snytax below.*/

  const sumNumbers = number => number + number;

  /* ** Note that "concise body" style of functions means that it is one line, no parantheses
  or curly braces, and due to this, does not require the "return" keyword. The example below will 
  still return the result */

  const areaOfCircle = raidus => Math.PI * radius * raidus;

  /* Scope - Defines where variables can be accessed or referenced. Scope is the context
  in which our variables are declared and defines how variables you declare can or cannot
  be accessed at different places in your code.

  Global Scope - variables defined outside of a code block - accessed from any code
  in the program. Note that you can also use global variables across files if they're linked.
  You should avoid Global scoping variables as it causes unexpedted and unintended "side effects". 
  This means that a function reaches outside of its local scope and up into a parent scope to alter a value.
  Ex where color is a global variable: */

  const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue

/* Block Scope - Variable defined within a block of code and is only accessible within the 
curly braces. Variables delcared with block scope are "local" variables. Ex: */

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
  };
  
  logSkyColor(); // blue 
  console.log(color); // ReferenceError

/* Scope Pollution - When too many global variables take up the namespace. Ex:*/

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/* Scope Chain - How a function uses global variable values. It follows the "scope chain", 
first checking current scope and if not found, then looks in parent scope of the function,
The JavaScrip Interpreter will continue looking "up" the scope chain until it reaches
the global scope. If the value is not found in the global scope, an "Unacaught ReferenceError
will be raised, notifying you that the variable is undefined. 

NOTE - This means that if you define a variable in a function that has the same name
as a variable already defined in the global scope, the local variable will take
precedence over the global one. This is sometimes referred to as "variable shadowing". Ex:*/

let foo = 'bar';

function logFoo() {
  let foo = 'bizz';
  console.log(`inside logFoo, foo is ${foo}"`);
}

/* Indeterminate - a function that, given a single set of input, returns one value
some of the time, and another value at other times. 

  Determinate - a function that always returns the same value if provided the same input. 

  Pure - A function is said to be "pure" if it is determinate and produces no side effects. 
  
We can avoid indeterminate code by always using "let" or "const" in local variable delcaration, 
along with "strict mode", which will raise an "Uncaught ReferenceError if a variable is not delcared
with those. Ex:" */

'use strict';

function myFunc() {
  foo = 'foo';
  // do something
}

myFunc(); // => raises `Uncaught ReferenceError`

/* Arrays - JavaScript's way of making lists. Can store any data type and are ordered, 
starting at position 0. Array literal - one way to create an array, wrapping square brackets around a list of items
that are sperated by commas. Each item is called an element. Ex: */

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

/* Accessing Elements - Use their index, zero-indexed meaning starting position is zero. 
In the example below the variable is not an array, but the log does access the 6th indeced 
position. */

const hello = 'Hello World';
console.log(hello[6]);
// Output: W

// Updating Elements - You can simply reference the index and reasign the value Ex: 

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/* Arrays - let vs const - Even if you use the const keyword to create an array, the
elements are still mutable, but you cannot reassign the array or elements themselves. */

/* .length property - Can return the number of items in an array: */

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

/* .push Method() - Allows adding of items to the END of an aray Ex: */

const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

/* .pop() Mehthod - removes the last item of an array. Does not take any arguements
and actually returns the last item removed from the array for later use.  Ex: */

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// Other useful methods: 

// .join() - Joins all elements of an array into a string.

//.slice() - Copy an Array at the indexes indicated. Without arguments will copy the whole array.
// NOTE that the slice will return all values from the starting index up to but NOTsplit INCLUDING the end index.
    var shallowCopy = fruits.slice(); // this is how to make a copy
    // ["Strawberry", "Mango"]

    // You can also use negative values for the begin parameter in order to select the las n numbers of an array
    const myArray = [1, 3, 4, 5];
    myArray.slice(-2); // returns [4, 5];

//.splice() - Remove an item by index position.
    var removedItem = fruits.splice(pos, 1); // this is how to remove an item                      
    // ["Strawberry", "Mango"]

    var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
    console.log(vegetables); 
    // ["Cabbage", "Turnip", "Radish", "Carrot"]

    var pos = 1, n = 2;

    var removedItems = vegetables.splice(pos, n); 
    // this is how to remove items, n defines the number of items to be removed,
    // from that position(pos) onward to the end of array.

    console.log(vegetables); 
    // ["Cabbage", "Carrot"] (the original array is changed)

    console.log(removedItems); 
    // ["Turnip", "Radish"]

//.split() splits a string object into an array of string by seperating the string sinto substrings.
    // This method takes an argument of where the string should be split. EX:

    var str = 'The quick brown fox jumps over the lazy dog.';

    var words = str.split(' ');
    console.log(words[3]);
    // expected output: "fox"

    var chars = str.split('');
    console.log(chars[8]);
    // expected output: "k"

    var strCopy = str.split();
    console.log(strCopy);
    // expected output: Array ["The quick brown fox jumps over the lazy dog."]

    // If you want to turn a string into an array of individual characters, use "" as the argument: 

    function getAllLetters(str) {
      // your code here
     return str.split("");
    }
    
    console.log(getAllLetters("Hello")); // expect an array 



//.shift() - Remove from the front of an Array AND returns that value as well.
    var first = fruits.shift(); // remove Apple from the front
    // ["Banana"];


//.unshift() - Add to the front of the Array.
    var newLength = fruits.unshift('Strawberry') // add to the front
    // ["Strawberry", "Banana"];


//.concat() - Used to merge two or more arrays - does not change current arrays, just returns a new one.
    var array1 = ['a', 'b', 'c'];
    var array2 = ['d', 'e', 'f'];

    console.log(array1.concat(array2));
    // expected output: Array ["a", "b", "c", "d", "e", "f"]

// .sort() - Sorts the original array, does not create a new array. 
// With no arguments will sort the array alphabetically. 
const myArray = ['zebra', 'yodel', 'xylophone'];
myArray.sort();
console.log(myArray); // => ['xylophone', 'yodel', 'zebra']


// .substr() - extracts part of a string. Recursive example:

const reverse = string => {
  // base
  if (string === "") {
    return "";
  } else {
    // general
    return reverse(string.substr(1)) + string.charAt(0);
  }
};

console.log(reverse("abc"));

/* If you want to use .sort() to sort in another fashion, you must pass a "compare function" 
that tells the computer the criteria for sorting any 2 items. Must return a numeric value. 
The below exmaple sorts by the usual way:   how to sort numbers in ascending order*/
const myArray = [200, 20, 2, 100, 1, 10];

console.log(myArray); // => [200, 20, 2, 100, 1, 10]

function sortNumbers(a, b) {
  return a - b;
}

myArray.sort(sortNumbers);
console.log(myArray) // => [1, 2, 10, 20, 100, 200]

// Sting split() method - Split a string into an array of substrings. Ex:

let str = "How are you doing today?";
let res = str.split(" ");
// returns How,are,you,doing,today?


// hasOwnProperty() method - returns a boolean indicating whether the objec has the specified property as its own property.

function countAllCharacters(str) {
  // your code here
  let newObj = {};
  console.log("newObj now created as empty object");
  
  for (let i = 0; i < str.length; i++){
    if (newObj.hasOwnProperty(str[i])){
      newObj[str[i]]++;
    } else {
      newObj[str[i]] = 1;
    }
  }
  return newObj;
}

var output = countAllCharacters('banana');

console.log(output);

// More info at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

/* Arrays and Functions  - Ex: */

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/* Nested Arrays - You can store arrays inside of arrays. Ex: */

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

/* Loops - programming tool that repeats a set of instructions until a stopping condition is reached. 

for loop - utilizes an iterator variable which is check against the stopping condition
and assigned a new value over every iteration. */

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
};

// The output would be 0, 1, 2, 3.

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
};

/* Looping through Arrays - You can use for loops to perform the same function on each 
element of an array. To do this, the for loops should use the .length property in the condition. */

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

// Would print: 
Grizzly Bear
Sloth
Sea Lion

/* Nested loops - when you have a loop inside of another loop. You can use these to compare the elements
in multiple arrays. For every execution of the outer for loops, the inner loop will run completely.
** as in, it will do the inner for loop until it's condition is stopeped every time. */

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

/* While Loop - */

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

/* for loop vs while loop - for loops are good for when you know how many iterations you would like.
while loops are good when you don't always know in advance how many iterations will be required. */

/* Do...While loops - If you want a peice of code to run at least once and then loop based
on a specific condition after th first run. */

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// Ex: 

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

/* break keyword - When you want to stop the loop from continuing even though the stopping
conditon has not yet been met. */ 

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// Outputs: 
Banana.
Banana.
Banana.
Orange you glad I broke out the loop!

/* Higher Order Functions - functions that accept other functions as arguements and/or
return functions as an output. In JavaScript, functions are first class objetcs, which means
they can have properties and methods. */

// You can rename long functions with new variable names, then call them in the same fashion:

const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!

/* Functions as Parameters - We call functions that get passeed as a parameter a callback function. */

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

/* Iterators - built-in JavaScript methods that allow us to iterate over arrays.

.forEach() Method - Will execute the same code on each element of an array. Returns undefined. 
Syntax: */

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
  console.log('-' + groceryItem);
});

//Ex of arrow function: 

groceries.forEach(groceryItem => console.log(groceryItem));

// Predefined function for callback:

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

// Array.isArray() - method determines wheter the passed value is an Array. The below function takes an object and removes any values/pairs where  the value is an array.

function removeArrayValues(obj) {
  // your code here
  for (let key in obj){
    if (Array.isArray(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

let myArray = [1, 2, 3];

let what = Array.isArray(myArray);

console.log(what);

/* .map() Method - Takes a callback function, acts on each element of the array and
then saves the results to a new array. Ex: */

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/* .filter() Method - Returns a new array, after filter out certain elements from the 
original array. In other words, returns an array with values that evaluate to truthy
based on the condition in the method's block. The callback function for this array
should return either true or false.*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

// .find() - used to find a single item in an array: 


// .findIndex() Method - Find the location of an element in an array. 

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

// .indexOf - finds the index of a value in an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// .reduce() Method - returns a single value after iterating through all elements, reducing the array.

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

// .some() - returns true if at least one element in the array satisfies the testing function: Returns a boolean value.

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

// .reduce - executes the "reducer" function (that you provide) on each item in an array, giving the sum (single output).

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


// .every() - Tests wether all elements in the array pass the test implemented by the provided function: 

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true





// For more array iteration methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

/* Objects - Containers storing related data and functionality.

Object Literals - Objects can be assigned to variables, and use {} to designate an object literal.
The object is filled with key-value pairs, begun with the identifier, follow by a colon, then the value, 
and each key-value pair is seperated by a comma. Note that all keys must be unique. */

let spaceship = {}; // spaceship is an empty object.

// An object literal with two key-value pairs. Note keys with spaces require quotations
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};

/* Accessing Properties - Dot Notation - object's name, followed by the dot operator and then the property 
name. */

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

/* Bracket Notation - pass the property name (key) as a string. You must use bracket notation when accessing
keys that have numbers, spaces, or special characters in them. NOTE that if a key has a space in it, you MUST 
use bracket notation instead of dot notation.*/

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// You can use a variable inside the brackets to select the keys of an object:

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

/* Adding key-value pairs to objects - Using either dot or bracket notation, use = assignment
operator to add a new pair. If the property already exisits, the value wiil be replaced.
If there was no property it will now be added. */ 

/* Note - Even if you assign an array with the const keyword, it is still mutable, therefore 
you can still add new properties or change exisiting ones. */

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

/* Removing properties - Use the delet operator: */

const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission;  // Removes the mission property

/* Methods - when the data stored on the object is a function, this is called a method. 
A property is what an object has, while a method is what an object does. */

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

/* After ES6 you may omit the colon and function keyword. Think of it like on an object, the parentheses
already indicate a function, or in the context of an object, a method. So to reiterate it would be 
redundant. */

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// Calling the method on an object: 

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be 
//called New Xaculon.'

/* Nested Objects - An object might have another object as a property. */

const spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
};

/* Accessing Nested Properties - Use chain operators. Must choose which to use in which case: */

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

/* Pass By Reference - When an objects values are passed into outside functions, the values 
are changed, as even const assigned objects are mutable. */

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

/* Looping or Iterating Through Objects - Since key-value pairs in objects aren't ordered like arrays, 
there is an alternative solution: 

for...in - Will execute a given block of code for each property in an object. */

let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
// for...in
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let recipe in recipes) {
  console.log(recipe);
}

/*
object.entries() - returns an array of a given object's own enumberable string-keyed property [key, value] pairs in the same order as that provided by a for...in loop. 
*/

/* Object.keys - a way to iterate over the key/value pairs in JavaScript. Pass an object
to Object.keys and you get back the keys of that object as an array. This allows you 
to iterate through an objects keys and access each value. For exlet ample */

const pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22,
};

console.log(Object.keys(pageViewCounts)); // Logs an array of the keys

Object.keys(pageViewCounts).forEach(function(key) {
  console.log(`
    the ${key} page has  ${pageViewCounts[key]} views.`); // ${pageViewCounts[key]} access the value of the key.
});






/* Advanced Objects - 

The this keyword - Take the below example, dietType is being used in the diet() method, but the
output is a reference error. This is becuase inside of the diet() method, you don't automatically have 
access to other properties of the object without direct reference of the object itself. This is avoided
with the .this keyword. : */

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

/* You must use the .this method to reference the object the method is contained in. In other words,
the this keyword references the calling object which provides access to the calling object's properties. */

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore

/* NOTE - You CANNOT use arrow functions with .this notation. */

/* Privacy - The concept that only some properties of objects are mutable. You can 
set some properties to private to not allow the value to be changed. There isn't technically
a method to do this, only a naming convention to notify other developers how to ineract with 
the propery. Use the _ to name a property that should be private. */

const bankAccount = {
  _amount: 1000
}

// But since it's not a true stoppigng method, it can still be changed: 

bankAccount._amount = 1000000;

/* Getters - Methods that get and return the internal properties of an object. get keyword 
is followed by a function. if...else conditonal checks if _firstName and _lastName exist. 
and then return a different value depending on the resutl. For getters, you don't have to 
use () parentheses, so it's like another property.   */ 

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'

/* More on getters - they can perform an action on the data when getting a property. 
They can return a different value using conditionals. */

/* Setters - reassign values of existing properties within an object. */

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

/* This helps other developers understand how the code is meant to be used. 
It is still possible to reassign the value directly. */

/* Factory Functions - For when you want to create many instances of an object quickly. 
returns an object and can be reused to make more objects. Can also take parameters that 
allow custom objects to be returned. */ 

/* Set the function to return an object with properties that are equal to the set 
parameters: */

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

// You then call the factory function with the required parameters: 

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

/* Destructuring - ES6 new shortcuts for assigning properties to variables. 
Take the below example: */

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};

// and turn it into this using "property value shorthand": 

The example below works exactly like the example above:

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};



/* Destructured Assignment - Create a variable with the name of an object's key(or property)
that is wrapped in curly braces {} and assign to it the object: */

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

// This can also be used on nested properties:

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

/* Built-in Objects Method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods */

/* Classes - You can create classes to create instances of the same class. 
Bascially they're templates for objects. 

Constructor - the Constructor method is what seperates classes from objects. In 
JavaScript, the constructor method is what creasts a new isntance of the class. Note that 
for classes, you capitilize first letter and first letter of each next word.  */

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

/* Instances - an object that contains the property names and methods of a class but with 
unique property values. You use the "new" keyword to create an instance of the class.  */

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'

/* Methods - class method and getter syntax are the same for object, except that you cannot
include commas between methods: */

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

// Calling methods on created instances of classes: 

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console

/* Inheritance - When you have two classes that share similare properties but with some 
differences, such as cats vs dogs, you can actually create a super class (parent) that both
instances could be called on and modified. */

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

/* Once you have created the super/parent class, you can extend to a subclass with the extend
keyword. The extends keyword makes the methods of the super class available in the subclass.
The super keyword calls the constructor of the parent class, AND passes the name of
"cat", in this case, as the arguement to the superclass constructor method. This is
extremely useful if you have to change the behavior or property of many classes, 
but only need to change it in the parent class.  */

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

/* Note that you must use the super keyword before you can use the this keyword.
It is best practice to call the super keyword on the first line of the new 
constructor. Now we will create a new instance of our new subclass: */

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

/* *** Note that the above example is NOT best practice to call the name, you want 
to use a getter method instead of calling the property directly, hence the _name, which
indicates you should use a getter method instead. */

/* Apparently since we used the getter method with the variable name, we 
call that property in the following way: */

console.log(bryceCat.name);
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior

/* You can also use getter and setter methods on subclasses of course to get
the values of their added properties. */

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._usesLitter;
  }
}

/* Static Methods - methods that aren't available in individual instances
but that you can call directly from the class. But you cannot call these methods
from an instance of the class. */

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

/* By making generateName a static method, you can only call this on 
the Animal class itself, not on a subclass. */

console.log(Animal.generateName()); // returns a name

// You cannot call this on an instance, as shown below:

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

/* DOM Model - Document Object Model - HTML DOM is a programming ineterface
that allows access to a web page. 

** Note that you add JavaScript to your HMTL page with the following:*/

<script src="myscripts.js"></script>

/* DOM Manipulation - Use methods from the DOM to access, add, remove, and update 
elements using JavaScript. 

  getElementById() - retreives the first matched element with the specified ID

  getElementsByTagName() - retrieves the list of matched elements with the 
  specified tag. Note this is kplural and will create an array.

  getElementsByClassName() - retrieves the list of matched elements with the 
  specified class. Note this is kplural and will create an array.

  getElementById()  Ex: */

<html>
  <body>
    <p id="myId">This is a paragraph</p>
    <script>
        var elem = document.getElementById("myId");
        console.log(elem);
    </script>
  </body>
</html>

/* Ex of getElementsByTagName() - This will display both the array, and then each
element of the array by itself. */

<html>
  <body>
    <h4>This is h4 1</h4>
    <h4>This is h4 2</h4>
    <h4>This is h4 3</h4>

    <script>
      var h4Array = document.getElementsByTagName("h4");
      console.log(h4Array);     //Note that this returns an array.
      // To access each individual array: 
      for (i = 0; i < h4Array.length; i++) {
        console.length(h4Array[i]);
      }
    
    </script>
  </body>
</html>

/* Ex of getElementsByClassName() - This will display both the array, and then each
element of the array by itself. */

<html>
  <body>
      <span class="one">Span 1</span> 
      <span class="one">Span 2</span>

    <script>
      var spanArray = document.getElementsByClassName ("one");
      console.log(spanArray);
      for (i = 0; i < spanArray.length; i++) {
        console.log(spanArray[i]);
      }

    </script>
  </body>
</html>

/* Changing the HTML - text-based elements have the property innerHTML that 
you can change contained text: */

element.innerHTML = "new content";

/* Atrributes can be set using the setAttribute() method, and in some cases,
can be accessed directly using the dot-noation: */

element.setAttribute("name", value);

/* You can even manipulate CSS style properites using this: */

element.style.property = value;

// Ex: 


<html>
  <body>
    <p id="myId">This is a paragraph</p>
    <script>
        var para = document.getElementById("myId");
        console.log(para);

        para.innerHTML = "New text is being displayed!";
        para.style.color = "red";
    </script>
  </body>
</html>

/* Adding/Deleting Elements.

createElement() - creates an element of the specified tag

appendChild() - adds a child element to the one speicified

removeChild() - deletes a child element of the one specified */

/* createElement() Ex: So note that first we assign the empty container
to div variable. We then create another variable elem and create an h2 element.
We then edit the h2's innerHTML property and set it to This is a Heading.
Lastly, we add a child element to the assigned div, with the argument elem, which
is the newly created h2. */


<html>
  <body>
    <div id="containter">
    
    </div>

    <script>
       var div = document.getElementById("container");
       var elem = document.createElement("h2");
       elem.innerHTML = "This is a heading.";
       div.appendChild(elem);
      
    </script>
  </body>
</html>

/* Example of having an UL list dynamically populated by an array of arrays,
in this case, a list of ingrediants per recipe is added to the li on the 
JavaScript file. The Ul element has an Id of "ingrediantsList"*/

// List of Ingrediants that corresponds with recipes array. 
var ingrediants = [["Flour", "milk", "eggs", "sugar"], 
                  ["Love", "sprinkles", "magic"],
                  ["Kisses", "calories", "crunchies"],
                  ["Fruity Peppbles", "eggs", "frosting"],
                  ["Danger", "Dellight", "Deliciousness"]];

var ingrediantUl = document.getElementById("ingrediantsList");

for (i = 0; i < ingrediants[random].length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = ingrediants[random][i];
    ingrediantUl.appendChild(listItem);
}

/* Dynamically populating <li> wrapped in <a>, allowing linkes to be added
to a list. You actually do this by adding the actual tags into the string that
will be inserted into the "innerHTML" property. Which makes senese. Ex: */


// Display Title from Array based on Integer
var recipes = ['<a href="index.html">Drop-Dead Donuts</a>', '<a href="#">Curl-Your-Toes Cupcakes</a>', 
              '<a href="#">Kiss-Me-Calories Cupcakes</a>', '<a href="#">Pebble-Crusted Perfection</a>',
              '<a href="#">Dangerous Delight Cupcakes</a>'];

/* You can create div elements: */

let div = document.createElement('div');

/* You can also give the newly created div an ID by using the
.setAttribute method on the created Div: */

let catDiv = document.createElement('div');

catDiv.setAttribute('id', 'whateverId');

// Another example: 

// Creating a div element
var divElement = document.createElement("Div");
divElement.id = "divID";

// Styling it
divElement.style.textAlign = "center";
divElement.style.fontWeight = "bold";
divElement.style.fontSize = "smaller";
divElement.style.paddingTop = "15px";

/* User Events - 

Event - Actions that occur. Initiated by the user or within the browser.
Event Handler - objects that are registered with a particular
even and notify when an event occurs.
Listeners - can be added to DOM elements

Even Handler - Use the addEventListender method to register a handler:*/

GamepadButton.addEventListener("click", functions() {
  ...
});

// Ex: 

<html>
<body>
  <button id="clicker">Click Me!!!</button>
</body>
<script>
  var btn = document.getElementById("clicker");
  btn.addEventListener("click", function (){
    alert("The button was clicked!!!");
  });
</script>

</html>

/* Event Names:
click - user clicks their mouse
change - option is selected from a dropdown
mouseover - occurs when cursor is over an element
keydown - a key is pressed
load - element loads
focus - element has focus
blur - when an element loses focus
submit - when a form is submitted or pressed */

<html>
<body>
  <form id="myForm">
    <select id="theSelector">
      <option value="" disabled selected> Choose a value</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
    <input type="submit" value="Submit"></input>
  </form>
</body>
<script>
  var selector = document.getElementById("theSelector");
  selector.addEventListener("change", function(){
    alert("The option was changed: " + slector.value);
  });

  var form = document.getElementById("myForm");
  form.addEventListener("submit", function(){
    alert("form was submitted!");
    console.log("The form has been submitted");
  });
</script>

</html>

/* callback function - parameter that is a function that is executed when
an event occurs. */

/* Prevent default actions - 

preventDefault() - in order to stop the execution of default actions associated
with the event. */

link.addEventListener("click", function(event){
  event.preventDefault();
  ...
});

/* Event Propagation - How events are propagated and move through
elements in your browser. When an event occurs, the event is emitted
from the top most objec tin the DOM, which is window, then moves down the 
document tree until it reaches the target of the event. This is called "capture"

capturing - is the phase of event propagation through the DOM from the 
root node to the target.

Bubbling - is the phase of the event propagation outward from the target
up the DOM to the root node. 

The event is said to "bubble up to the window" object of the DOM tree.

By default, event listeners are triggered during the bubbling phase. 

You can change this by specifying a third parameter to the addEventListener() 
method to indicate which phase the callback will fire under.

The third value is a boolean value, true or false. 
  true - sets the phase to capturing (from root node to target).
  false - sets the phase to bubbling (default - from target to root node). */

third value is a boolean value, true or false. 
  element.addEventListender("click", callback, phase); //Syntax


/* JavaScript Timers - 

timer - function that executes after a set period of time.

setTimeout() - execute a function after a specified number 
of miliseconds.

setInterval() - execute a function repeatedly waiting the specified
number of time in between executions.

clearInterval() - stop execution of code run by setInterval(). */

// Example will execute talk() after 4 seconds.
<html>
<head>
  <script>
    function talk() {
      alert("Hello!");
    }
    setTimeout (talk, 4000); 
  </script>
</head>


</html>

// Example of creating timer that counts every one second: 

let count = 0;

function counter () {
   let time = document.getElementById("timer1");
   time.innerHTML = count;
   count++;
    
};

setInterval(counter, 1000);

// time that counts down every one second: 

let count = 100;

function counter () {
   let time = document.getElementById("timer1");
   time.innerHTML = count;
   count--;
    
};

setInterval(counter, 1000);

function counter (secondsDisplayed) {
  let time = document.getElementById("timer1");
  time.innerHTML = secondsDisplayed;
  SecondsDisplayed--;
   
};

/* setTimeout - delays the execution of code by the ms designated in the 
second argument. Source: https://medium.freecodecamp.org/javascript-timers-everything-you-need-to-know-5f31eaa37162 */

setTimeout(
    () => {
      console.log('Hello after 4 seconds');
    },
    4 * 1000
);

// Note that you don't have to use an inline function, it can be a function reference.

const func = () => {
  console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);

/* Note that if the function that is passed into the setTimeout function
accepts any arguments, these can be passed in as concurrent arguements to setTimeout
itself. Ex: */

setTimeout(func, 4 * 1000, 30, value); // if func were to accept a number and a value as arguements. 

/* setInterval() - Does what's contained repeatedly after a delay. Ex: */

setInterval(
  () => console.log('Hello every 3 seconds'),
  3000
);

/* clearTimeout() - 

// More on Timers - Real example: 
/* Button Timers - Includes button to start timer and button to stop timer.
Should be a way for me to add a parameter to reduceTime1 function so that 
I can use alt functions as arguments, but attempting this has not worked. */

// Drop-Dead Donuts
// Gets and sets the timer display and reduces value by 1.
function counter1 () {
  let time = document.getElementById("timer1");
  time.innerHTML = secondsArray[0];
  secondsArray[0]--;

}
// Calls the counter function after 1000 ms.
function reduceTime1 () {
  t = setInterval(counter1, 1000);
}
// Adds a "click" event listener and calls the reduceTime1 function.
document.getElementById("start1").addEventListener("click", reduceTime1);

//Attempting to use clearInterval() method to stop timer:
function clearVal1 () {
  clearInterval(t);
}
document.getElementById("stop1").addEventListener("click", clearVal1);


/* Regular Expressions - used to match character combinations in strings. Finds
strings inside of strings. Used for:
Video: https://www.youtube.com/watch?v=VrT3TRDDE4M
   1. Validation - Validate info in the form
   2. Extraction - Extract and use portions of strings
   3. Replacement - Matches a string and then replaces each string.

// Back slashes signify a string? 
// These are also objects. 
// Character classes are ranges of alpha characters or integers in brackets. */

/[0-9]/

// A + sign after stuff means one or more
 
[0-9]+     // one or more of 0-9
[a-z]*     // * means 0 or more
^string    // means must have string at the beginning
string$    // must end with string

/* A regular expresion is contained between two slashes. You can then modify the
slash with: 
  g - Global match
  m - Multiline 
  i - Ignore case/Case insensitive
*/
let reSlash = /^matchthis$/i

// Another way is using the regular expression constructor method:

let reConstructor = new RegExp("pattern", "flag")  // beomces:
let reConstructor = new RegExp("^matchthis$", "i") 

// Special characters- the below variable is all special characters
// Note that there are two \ because one \ denotes an "escape" so you
// need two for just one to register. 

let theSpecialChars = "[({})}\\^$.!?*+"
let reMatchTheSpecialChars = 

// You can also use {} notation after specification to signify the # of characters
// Examples?
[a-z0-9A-Z]   // Checks cap/non cap letters and 0-9
[/w]            
// the above is the same as above, but also includes _ 
[/d]+
// all digits 


/* My example in SousMate200 project of succesfully checking
my string for parameters: */

let password = "longpass"
let regAlpha = /[a-z]+/;
let regNum = /[0-9]+/;

if (password.length > 7 && password.match(regAlpha) && password.match(regNum)) {
    console.log(password);
} else {
    alert("Error: Your password did not meet the requirements");
}


// You can supposedly take input elements value using buttons, with this html: 

<button onclick="functionName(document.getElementById("inputID").value)">Button Name</button>

// Promises - used for asynchronous computing, and have 3 states: pending, resolved, or rejected.
// must have an Executor function, which takes two functions as arguments, resolve() and reject().
// This executor function is then used as the arguement to a promise, using the promise constructor method:

const myExecutor = (resolve, reject) => {
  if (someCondition) {
    resolve('I resolved!');
  } else {
    reject('I rejecte!');
  }
}

const firstPromise = new Promise(myExecutor);

/* Promises use .then() method for when a promise settles, giving it subsequent instructions.
This is a higher-order function that takes two callback functions as arguements.
These functions are referred to as "handlers". The first is the "onFulfilled" success handler.
This should containt the code for the promise resolving.
The second handler is sometimes called "onRejected" and is a failure handler, contains
the code for a promise rejecting. 
Ex of: */
const prom = new Promise ((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // prints 'Yay!'

/* In the example above, "prom" is the promise which will resolve to "Yay!". 
.then() is invoked on the promise, with handleSuccess() as the callback funtion argument,
which will pass the resolved value as an argument. */

// Ex of providing both resolved and reject case:

let prom = new Promise ((resolve, reject) => {
  let num = Math.random();
  if (num <.5) {
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionreason);
};

prom.then(handleSuccess, handleFailure); // Provides two handler functions which gives instructions for resolve and rejected values respectively. 

// If you want to seperate ? the success and failure handlers, you can use .catch() for rejection:

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

  /* Composition - chaining of promises. This allows for asynchornous tasks that depend on one another
  to be completed in order. Note that these are "chained" and not "nested" (indented) Ex: */

  firstPromiseFunction()
    .then((firstResolveVal) => {
      return secondPromiseFUnction(firstResolveVal);
    })
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    });

/* Using Promise.all() - "concurrency" checking multiple promises. This method accepts and array
of promises as its argument and returns a single promise. Returns a single promise that will settle
one of two ways:
    1. If every promise resolves, will resolve with an array containing the resolve value from 
    each promise in the argument array.
    2. If any promise from the array rejects, the single promise returned will reject with the reason 
    that promise was rejected. Referred to as "failing fast".
Ex: */

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises 
    .then((arrayOfValues) => {
      console.log(arrayOfValues);
    })
    .catch((rejectReason) => {
      console.log(rejectionReason);
    });

    /* Asynch Await Module - Always returns a promise, uses .then() and .catch() methods. Returns one of three ways:
    1. If nothing returned, resolved with value of undefined.
    2. non-promised value, it will return a promise resolved to that value.
    3. If promise is returned from function, returns that promise.*/

async function myFunc() {
  // Function bodfy here
};

myFunc();

// Can also write with:

const myFunc = async () => {
  // Function body here
};

// Ex, even though 5 is returned, when fivePromise is invoked, returns a promise with a resolved value of 5:

async function fivePromise() {
  return 5;
}

fivePromise()
  .then(resolvedValue => {
    console.log(resolvedValue);
  }) // Prints 5.

  /* Await Operator - Can only be used inside async function. It is an operator which returns the resolved value of a promise.
  This operator halts of pauses execution of async function until a promise is resolved. In the below example,
  myPromise() is a function that returns a promise which will resolve to a string, "I am resolved now!" Ex: */

  async function asyncFuncExample() {
    let resolvedValue = await myPromises();
    console.log(resolvedValue);
  }

  asyncFuncExample(); // Prints "I am resolved now!"

// Turning native promise syntax into async ... await snytax: 

function nativePromiseVersion() {
  returnsFirstPromise()
  .then((firstValue) => {
    console.log(firstValue);
    return returnsSecondPromise(firstValue);
  })
  .then((secondValue) => {
    console.log(secondValue);
  })
}

// Re-writes as: This means that firstValue is assinged the resolved value of the awaited promise.

async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}

/* Async uses try...catch statements for error handling. Ex:*/

async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // catches any errors in the try block
    console.log(err);
  }
}

usingTryCatch();

/* Using Promise.all() - In the below exmaple, we await the resolution of a promise.all(). This was invoked
with an array of promises. Next, we loop through resultArray and log each item.This also gives the advantage
that if one promise is rejected, it will not wait for the other processes before rejecting. NOte
that with this method, none of the promises must be depenedant on another. Ex:*/

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
    for (let i = 0; i < resultsArray.length; i++) {
      console.log(resultsArray[i]);
    }
}


/* JavaScrip Requests I - GET - POST - requests. Make these requests with JavaScript's XHR object. 
  GET - requesting, retrieving, or getting info from a source.
  POST - posting info to a source.

HTTP Requests - 
We'll be using one system of technologies called Asynchromous JavaScript and XML, or AJAX.
XML stands for Extensible Markup Language

Example of creating an XHR GET Request from scratch: */

const xhr = new XLMHttpRequest(); // creates new object
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json'; // JSON is JavaScript Object Notation, which is how the response will be formatted
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
		return xhr.response;
} 
}

xhr.open('GET', url);

xhr.send();

/* POST requests - Major difference between GET and POST  request is that POST request
requies additonal info to be sent through the request. Sent int he body of the post Request*/

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
if (xhr.readyState === XMLHttpRequest.DONE) {
  return xhr.response;
	}
}

xhr.open('POST', url);
xhr.send(data);

/* .fetch() GET requests - This function creates a request object that contains
relevant info that an API needs. Sends that request object to the API endpoint provided.
Returns a promise that ultimiately resolves to a response object which contains
the status of the promise with info the API sent back. 



// JavaScript In Depth Course Notes - 

- Global Exeduction Context - When we load any Js file to the JS engine, we get a "global exectuion context", js pulls a chunk of memory and creates a JS object, a "window" or global object. Where "this" is equal that object. This is put on the "execution stack", which is another peice of memeory structured like a stack. last one in is the first one out. So the Window(global) object is first before anything else that we have written. 

-Everytime you call a function, a new exectuion context is added to the execution stack for the JS engine to run. Non-global execution context , which is anything not window(global), has an attached reference, referencing it's outer enviornment, which is just the next lowest item on the execution stack, up to window(global), which does not have a reference as there is nothing below it in the stack.

A function is an object that can be invoked. Functions are first class data types in JavaScript. 

// EC - GLobal - Global Execution Context
// window object
// this
// outer 

//  Two pahses of JavaScript
//  1. Creation Phase (var, function ) - goes down through the code and creates variables with undefined value
//  2. Execution - looks for values and then assigns that memory to that value

A function is a first class object. 


Inital value of all variables in the creation phase is undefined!
firstResult = undefined;*/






// shuffle() - method:

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
  Local Storage - Ab ility to store info locally in the browser. Depends on device Data is saved in a string form. 

  localStorage - object:
    localStorage.setItem() - first parameter - name, secone parameter - object/string of text that is saved as the value at the key.
    localStorage.getItem() - retrieve that item and can store in other variables. 
    localStorage.removeItem() - remove items from the local storage

    You can look at local sorage under "Resources" tab in the inspection tools.
*/

const siteName = 'My site';

localStorage.setItem('siteName', siteName);


// If passing an object, can store by using .stringify() method:

let siteData = {
  sitename:  'My Site',
  siteDescription: 'Another JS Site'
}

localStorage.setItem('siteData'), JSON.stringify(siteDate));

// Then you can get that item and turn it back into JSON object by using .parse():, returning the JSON object, which can then be used:

localData = JSON.parse( localStorage.getItem('siteData'));

Headers.innerHTML = localData.siteName; // would change header to 'My Site'

// Another testing example showing this works:

let myObject = {
  name: "Kristen",
  age: 29
};

localStorage.setItem("myObject", JSON.stringify(myObject));

console.log(localStorage.myObject);

let testData = JSON.parse(localStorage.getItem("myObject"));
console.log(testData);


