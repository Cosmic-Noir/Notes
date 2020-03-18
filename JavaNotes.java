// Revature Study Guide Notes: 

/* Java is a general-purpose, concurrent, class-based, object-orietned language that 
is specifically designed to have as few implmentation dependencies as possible. 
    Should cover: 
        1. Language Baisics - knoew traditional features: variables, arrays, data types, 
        operators, control flow, and keywords like static, final ect.
        2. Classes and Objects - how to write the classes from which objects are created, and how
        to create and use the objects and what constructors are. 
    **  3. Interfaces and Inheritance - What are they? Why you would want to write one and how 
        to write one. How to derive one class from another. How a subclass can inherit fields and
        methods from superclass and how to modify the methods that are inherited. 
        4. Numbers and Strings - how to use Number and String object and how to format
        data for output.
        5. Generics - powerful feature of java. improve safety of code and making bugs more detectable.
        6. Packages - feature of java that helps organize and structure classe and their relationships. 
    

Collections in Java: 
Source: https://docs.oracle.com/javase/tutorial/java/index.html
https://www.geeksforgeeks.org/collections-in-java-2/

Collection in Java - a single unit of object, i.e., a group. A collection is a group of individual objects represented
    as a single unit. Java prodies Collection Framework which defines several classes and interfaces to represent a group of 
    objects as a single unit. 
Framework in Java - provides readymade architecture, represents a set of classes and interfaces, and is optinal.
Collection Framework - a unified architecture for storing and manipulating a group of objects. It has: 
    1. Interfaces and its implementations, i.e., classes.
    2. Algorithm. 





















// Codecademy Notes:

Data Types: 
    1. int - integer all positive and negatgive numbers including zero. Does not need quotes. 
    only allows values between -2,147,483,648 and 2,147,483,647.
    2. Boolean - true or false, does not need quotes.
    3. char - characters. Does need quotes.
    4. Doubles - primitive data type for very large values and decimals, can hold up to 1.797,693,134,862,315,7 E+308,
     which is approximately 17 followed by 307 zeros. The minimum value is 4.9 E-324, which is 324 decimal places!
        */
    double price = 9.99;
    double gdp = 122377700000;

/*Relational Operators - return boolean true or flase, these are < <= > >=. These "operators" are 
placed between two "operands" (numbers or compared values);

Equality Operators - These are == equal to and != note equal to. 


//In Java, all variables must have a specified data type. Ex:
    int myLuckyNumber = 7;


** Control flow is the use of different instruction sets depending on the values we provide. 

Class: a blueprint for how a data structure should function

Constructor: instructs the class to set up the initial state of an object

Object: instance of a class that stores the state of a class

Method: set of instructions that can be called on an object

Parameter: values that can be specified when creating an object or calling a method

Return value: specifies the data type that a method will return after it runs

Inheritance: allows one class to use functionality defined in another class

/* Conditionals and Control Flows. Control Flow - Different sets of instructions depending on the values we provide them. 

Boolean operators - help you use control flow. Such as &&  ||  !  which represent And, Or, and Not, respectively. 
These operators have an order of precedence: ! first, && second, and || third. */

/* Ternary Conditional statements. Consists of a Boolean expression, a statement that gets executed if true, and a one that executes if false.
Example: If pointesScored > 20 then 'W' is executed, if false, then 'L' is executed*/

int pointsScored = 21;

char gameResult = (pointsScored > 20) ? 'W' : 'L';
System.out.println(gameResult);

/* Switch statements.  provides a way to execute code blocks based on whether a block is equal to a specific value. 
Without the break statement, Java will continue to check whether the value of restaurantRating matches any other cases. Ex: */

int restaurantRating = 3;

switch (restaurantRating) {

    case 1: System.out.println("This restaurant is not my favorite.");
      break;

    case 2: System.out.println("This restaurant is good.");
      break;

    case 3: System.out.println("This restaurant is fantastic!");
      break;

    default: System.out.println("I've never dined at this restaurant.");
      break;

      /* This program takes a car loan amount, loan length, interest rate, and downpayment to calculate a total montly payment which
       includes the interest rate, as long as the below conditions are met. */

public class CarLoan {
	public static void main(String[] args) {

	int carLoan = 10000;
  int loanLength = 3;
  int interestRate = 5;
  int downPayment = 2000;

    if (loanLength <= 0 || interestRate <= 0) {
      System.out.println("Error! You must take out a valid car loan.");
    } else if (downPayment >= carLoan) {
      System.out.println("The downpayment is greater than the price of the car, no loan needed.");
    } else {
      // Must subtract the downpayment to get remaining balance. 
      int remainingBalance = carLoan - downPayment;
      // Must turn years into months to get the monthly payment.
      int months = loanLength * 12;
      // Must divide the remainingBalance by the number of months. This is without interest.
      int monthlyBalance = remainingBalance / months;
      // Must calculate the interest.
      int interest = monthlyBalance * interestRate / 100;
      // Now we may calculate the true monthly payment with interest.
      int monthlyPayment = monthlyBalance + interest;
      System.out.println(monthlyPayment);
    }
    
	}
}

// Object-Oriented Programs OOP. 
//Classes - set of instructions that describe how a data structure should behave. Simple example:
// Note that when naming a class, the first letter is capitalized. 

class Car {

}
/* Classes. Constructors. will allow you to create instances of the class. If you do not use a constructor,
 Java provides one that does not allow you to set initial info. Ex: */

class Car {

    //The class constructor for the Car class
    public Car() {

    }
}

// Instance variables. specific detials we want the class to include. Ex:

class Car {

    //Using instance variables to model our Car class after a real-life car
    int modelYear;

    public Car() {

    }
}
/* Constructor Parameters. allow data types to be created with specified attributes. 
The value of modelYear will equal the int value that is specified when we first use this class constructor. */

class Car {

    //Use instance variables to model our Car class after a real-life car
    int modelYear;

    public Car(int year) {

        modelYear = year;
    }
}

// The Main Method. Java's built-in main method. When Java runs your program, the code inside of the main method is executed. Ex:

public static void main(String[] args) {

}

/* Once you have a main method, you are ready to use your class. You do this by creating an instance of the class, known as an object.
 Note that this is done WITHIN the main method. Ex: */

class Car {

    int modelYear;

    public Car(int year) {

        modelYear = year;

    }

    public static void main(String[] args){

        Car myFastCar = new Car(2007);

    }
}
/* In the example above, we create a Car object named myFastCar. When creating myFastCar,
 we used the class constructor and specified a value for the required int parameter year * note this was place 
 inside of the main method of the class.  */

 // Methods. Methods are a pre-defined set of instructions declared within a class. Note that the new method 
 // is created OUTSIDE of the main method. Ex: 

 class Car {

    int modelYear;

    public Car(int year) {

        modelYear = year;

    }

    //Our new method to help us get "started"
    public void startEngine() {

        System.out.println("Vroom!");

    }

    public static void main(String[] args){

        Car myFastCar = new Car(2007);

    }
}

// Calling Methods. Once a method is created, you can call it on your objects INSIDE the main method, as this is the code run. Ex:

class Car {

    int modelYear;

    public Car(int year) {

        modelYear = year;

    }

    public void startEngine() {

        System.out.println("Vroom!");

    }

    public static void main(String[] args){

        Car myFastCar = new Car(2007);
        myFastCar.startEngine();
    }

    // You may also include parameters in your methods. Ex: 

    class Car {

        int modelYear;
    
        public Car(int year) {
    
            modelYear = year;
    
        }
    
        public void startEngine() {
            System.out.println("Vroom!");
        }
    
        public void drive(int distanceInMiles) {
    
            System.out.println("Miles driven: " + distanceInMiles);
    
        }
    
        public static void main(String[] args){
    
            Car myFastCar = new Car(2007);
            myFastCar.startEngine();
            myFastCar.drive(1628);
    
        }

/* Void keyword. indicates that no value should be returned by the method after is executes all the logic in the method.
 Alternatively, we can use data type keywords (such as int, char, etc.) to specify that a method should return a value of that type. 
 In the below example, we used the "int" keyword to indicate an integer should be returned, and "return" was used to store that value.
 In the main method, we called the method and stored the result in the tires variable which was then printed. Ex: */

 class Car {

    int modelYear;

    public Car(int year) {

        modelYear = year;

    }

    public void startEngine() {

        System.out.println("Vroom!");

    }

    public void drive(int distanceInMiles) {

        System.out.println("Your car drove " + distanceInMiles + " miles!");

    }

    public int numberOfTires() {

        return 4;

    }

    public static void main(String[] args){

        Car myFastCar = new Car(2007)
        myFastCar.startEngine();
        myFastCar.drive(1628);

        int tires = myFastCar.numberOfTires();
        System.out.println(tires);

    }
}

/* Inheritence example. Children classes can call on parent methods. The "extends" keyword is used to indicate the car class should inherit 
behavior defined in the vehicle class. Ex: */

class Car extends Vehicle {

    int modelYear;

    public Car(int year) {

        modelYear = year;

    }

    //Other methods omitted for brevity...

    public static void main(String[] args){

        Car myFastCar = new Car(2007)
        myFastCar.checkBatteryStatus();

    }
}
class Vehicle {

    public void checkBatteryStatus() {

        System.out.println("The battery is fully charged and ready to go!");

    }
}
/* Reivew of above concepts: 
Class: a blueprint for how a data structure should function

Constructor: instructs the class to set up the initial state of an object

Object: instance of a class that stores the state of a class

Method: set of instructions that can be called on an object

Parameter: values that can be specified when creating an object or calling a method

Return value: specifies the data type that a method will return after it runs

Inheritance: allows one class to use functionality defined in another class */



// Data Structures 
// For Loop. This is a control statement. Repeatedly runs a block of code until a specified condition is met. ex:

for (int counter = 0; counter < 5; counter++) {

    System.out.println("The counter value is: " + counter);

}

/* ArrayList. This is a data structure. This stores a list of data of a specified type. ArrayList is a pre-defined Java class and you musst first creat an
ArrayList object. The below example creates an ArrayList object with a stored data type of Integer. Ex: */

ArrayList<Integer> quizGrades = new ArrayList<Integer>();

// You can now add values of the Integer type to the ArrayList by calling the add() method on the quizGrades. Ex:

ArrayList<Integer> quizGrades = new ArrayList<Integer>();
quizGrades.add(95);
quizGrades.add(87);
quizGrades.add(83);

// We access the values by using the elements index, or position, in the list. They are zero-indexed. Use the get() method. This should print 95. Ex:

ArrayList<Integer> quizGrades = new ArrayList<Integer>();
quizGrades.add(95);
quizGrades.add(87);
quizGrades.add(73);

System.out.println( quizGrades.get(0) );

/* You can insert new elements into an array using add() method, you can even specify the index at which 
you'd like it inserted. The below exmpale will add an element at index 0, and all other elements will have 
shifted indeces. Ex: */

ArrayList<Integer> quizGrades = new ArrayList<Integer>();
quizGrades.add(95);
quizGrades.add(87);
quizGrades.add(73);

quizGrades.add(0, 100);
System.out.println( quizGrades.get(0) );

/* Iterating over an ArrayList. The size method in the example represents how many total elements
are stored in the ArrayList. The process of going through each element in the ArrayList is called iteration.*/

for (int i = 0; i < quizGrades.size(); i++) {

    System.out.println( quizGrades.get(i) );

}

/* For each loop. Simplies a for loop for iteration of ArrayLists. In the example above, the colon (:) can be read as "in". 
The for each loop altogether can be read as "for each Integer element (called grade) in quizGrades, print out the value of grade.
Note that the for each loop does not requires a counter. "Ex: */

for (Integer grade : quizGrades){
    System.out.println(grade);
}

/* HashMap. Another useful data structure. Contains a set of keys and values for each key.
First you mucst creat an object, in this example it is myFriends, which stores keys of String 
data type and values of Integer data type. Declaring a HashMap is as follows: */

HashMap<String, Integer> myFriends = new HashMap<String, Integer>();

// You can now add keys and values to a HashMap using the put() method to add a String key and an associated Integer value. Ex:

HashMap<String, Integer> myFriends = new HashMap<String, Integer>();

myFriends.put("Mark", 24);
myFriends.put("Cassandra", 25);
myFriends.put("Zenas", 21);

// HashMap Access. When accessing the value in a HashMap you specify the key. You call the get() method on the myFriends with the key. Ex:

HashMap<String, Integer> myFriends = new HashMap<String, Integer>();

myFriends.put("Mark", 24);
myFriends.put("Cassandra", 25);
myFriends.put("Zenas", 21);

System.out.println( myFriends.get("Zenas") );

/* Iterating over a HashMap. You can also access properties of the HashMap itself, such as the number 
of entries, or the contents. The below example uses keySet() Method which returns a list of keys. Ex: */

HashMap<String, Integer> myFriends = new HashMap<String, Integer>();

myFriends.put("Mark", 24);
myFriends.put("Cassandra", 25);
myFriends.put("Zenas", 21);

System.out.println( myFriends.size() );

for (String name: myFriends.keySet()) {

    System.out.println(name + " is age: " + myFriends.get(name));

}




/* Compiling .java files in the terminal. Use javac FileName.java to compile the file, which 
will then create a .class file which is the compiled code and may be run on the Java Virtaul Machine.

You then run the file with the command: java FileName  (leaving off the .class file type)
This is compiled into bytecode.*/









































