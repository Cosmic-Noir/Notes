// C# Notes. Uses a main method to execute code like Java, also called "entry point" of code.
// Source: https://csharp-station.com/Tutorial/CSharp/Lesson01
/* Data Types:
    1. Boolean - delcared with keywork "bool" - true or false value.
    2. Integral - whole numbers? + char types? Unclear.
    3. Floating Point and Decimal types - ? usedd when requiring fractional representations?
    4. Strings. */


// Udemy OOP C# - beginner to advanced video series:
// source: https://www.udemy.com/course/object-oriented-programming-with-csharp-beginner-to-advanced/learn/lecture/7998830#overview

// Creating a basic object in C#, we have created a Wariror class - in the code below, we create a new Warrior called theGoodGuy, which gives us access to the properities defined inside the Warrior class. We allso use the C# way of writing to the console to look at the values we are setting for the properiteis on our created class variables:

public class Warrior
{
  private int height;
  private int weight;
}

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior();
    theGoodGuy.height = 190;
    theGoodGuy.weight = 80;

    Warrior theBadGuy = new Warrior();
    theBadGuy.height = 170;

    System.Console.WriteLine(theBadGuy.height);
  }
}

// public/private is an access modifier

// Once attributes are set to private, we cannot set/have access to those properties in other places. The above code will no longer work.

// Now we create a public property and give it a get and set thingy.

public class Warrior
{
  private int height;
  private int weight;


  public int Height { get; set; }
  public int Weight { get; set; }
}

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior();
    theGoodGuy.Height = 190;
    theGoodGuy.Weight = 80;

    Warrior theBadGuy = new Warrior();
    theBadGuy.Height = 170;

    System.Console.WriteLine(theBadGuy.Height);
  }
}

// Adding methods, still have to specify the type of argument

public class Warrior
{
  private int height;
  private int weight;


  public int Height { get; set; }
  public int Weight { get; set; }
  public string Name { get; set; }

  public void Greetings(Warrior warrior)
  {
    System.Console.WriteLine($@"Greetings, {warrior.Name}!");
  }
}

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior();
    theGoodGuy.Height = 190;
    theGoodGuy.Weight = 80;
    theGoodGuy.Name = "Good Guy";

    Warrior theBadGuy = new Warrior();
    theBadGuy.Height = 170;
    theBadGuy.Name = "Good Guy";

    System.Console.WriteLine(theBadGuy.Height);

    theGoodGuy.Greetings(theBadGuy);
    theGoodGuy.Greetings(theGoodGuy);
  }
}

// Constructors - what constructs a class - used to give initial values or fields to a class - or perform any actions that must be performed at the creation of the class.

public class Warrior
{
  private int height;
  private int weight;


  public int Height { get; set; }
  public int Weight { get; set; }
}

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior();
    theGoodGuy.Height = 190;
    theGoodGuy.Weight = 80;

    Warrior theBadGuy = new Warrior();
    theBadGuy.Height = 170;

    System.Console.WriteLine(theBadGuy.Height);
  }
}

// Adding methods, still have to specify the type of argument

public class Warrior
{
  private int height;
  private int weight;
  private string name;

  public int Height { get; set; }
  public int Weight { get; set; }
  public string Name { get; set; }

  public Warrior(int height, int weight, string name)
  {
    // This is a constructor - which is normally named the same as the class - it looks like a method and can take args
    Height = height;
    Weight = weight;
    Name = name;
  }

  public void Greetings(Warrior warrior)
  {
    System.Console.WriteLine($@"Greetings, {warrior.Name}!");
  }
}

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior(190, 80, "Good Guy");
    // Now we can pass args and use the constructor instead of setting the properties afterwards -

    Warrior theBadGuy = new Warrior(170, 80, "Bad Guy");

    System.Console.WriteLine(theBadGuy.Height);

    theGoodGuy.Greetings(theBadGuy);
    theGoodGuy.Greetings(theGoodGuy);
  }
}

// Namespaces - a way to order your classes in your code - Simple as creating a folder like "Characters" and storing your class files, such as Warrior.cs, inside the folder.

// To use a namespace, you wrap your class in the specified namespace

namespace Characters
{
  public class Warrior
{
  private int height;
  private int weight;
  private string name;

  public int Height { get; set; }
  public int Weight { get; set; }
  public string Name { get; set; }

  public Warrior(int height, int weight, string name)
  {
    Height = height;
    Weight = weight;
    Name = name;
  }

  public void Greetings(Warrior warrior)
  {
    System.Console.WriteLine($@"Greetings, {warrior.Name}!");
  }
}
}

// EntryClass file code:

// To use the namespace, we have to use the keyword "using"
using Characters;
using System;

public class EntryPoint
{
  public static void Main()
  {
    Warrior theGoodGuy = new Warrior(190, 80, "Good Guy");

    Warrior theBadGuy = new Warrior(170, 80, "Bad Guy");

    System.Console.WriteLine(theBadGuy.Height);

    theGoodGuy.Greetings(theBadGuy);
    theGoodGuy.Greetings(theGoodGuy);
  }
}

// Get and Set are "accessors" because they allow you to read and write fields. You can use these explicitly to get and set field values"


public int Height
{
  get
  {
    return height;
  }
  set {
    height = value;
  }
}

// Note, that it is possible to use "private get" or "private set" to make those values inaccessible.

public int Height
{
  get
  {
    return height;
  }
  private set {
    height = value;
  }
}

// You can also use these to validate the incoming values, so for example, let's say there is a certain range that is only acceptable.
private int age;

public int age
{
  get
  {
    return age;
  }
  set {
    if (value >= 18 && value <= 45)
    {
      age = value;
    }
    else
    {
      System.Console.WriteLine("Selected age is not acceptable, must be between 18-45")
    }
  }
}

// Properly handling erorrs/exceptions - which one do you use? You may need to use the cntrl + . to import the correct error - There are a variety of exceptions to pick from - In this exmpale, the value is outside of the range. Use the constructor to pass arguments, in this case, the string displayed in the error. This will casue the code to stop and display the error.

private int age;

public int age
{
  get
  {
    return age;
  }
  set {
    if (value >= 18 && value <= 45)
    {
      age = value;
    }
    else
    {
      throw new Exception.ArgumentOutOfRangeException(string.Empty, "Selected age is not acceptable, must be between 18-45");
    }
  }
}

// to not throw an error, we can use a try/catch block to handle the error

try {
  theGoodGuy.Age = 25;
  theBadGuy.Age = 15;
}
catch (ArgumentOutOfRangeException)
{
  Console.WriteLine(ex.Message);
}


// 'this' keyword - allows you to directly reference the given field on the object - this is especially important for when you have conflicting field/propery names such as height and Height. Ex:

  public Warrior(int height, int weight, string name)
  {
    // Height = height;
    // so then the above becomes:
    this.height = height;
    Weight = weight;
    Name = name;
  }

  // Another example is when you have conflicting arguement names with fields on the object, so you can use 'this' to specify the field on the object as opposed to a named argument, like this:

  public void Greetings(string name)
  {
    Console.WriteLine($@"{this.name} greets {name}!");
  }

// So now, if you call:

theGoodGuy.Greetings("Tod");

// 'this' refers to theGoodGuy, who has a name field with a value of theGoodGuy, so you will get:

"theGoodGuy greets Tod!"

// Access modifiers:

// public, private, internal, protected

// Static keyword - Makes a class or member of a class usable without an instance of that class.

// Static fields are usable without an instance of that class. They are also shared across all instance of the class.

public static int id;

// so to access this you would write

Warrior.id

// instead of

Warrior firstWarrior = new Warrior();
firstWarrior.id // because this will not work on an instance of the class

// If we want to incrememt this static variable, this should be done in the constructor, you do NOT need to use this.id on a static field, because "this" points to the instance of that class.

public static int id;

public Warrior(int height, int weight, string name)
  {
    this.height = height;
    Weight = weight;
    Name = name;
    id++; // Seems to be preferred, because you could be referencing a static field on another class, like Hunter.id, which could be confusing. So when referencing a static field in the same class, don't use the example below
    // or: Warrior.id++;
  }

  // readonly -  if it is readOnly, it can never be changed.

  private readonly int id;

  // Constants - should be capitalized - create default values and use these instead of passing integers to the constructor

  private const int DEFAULT_ABILITY_POINTS = 20;
  private const int DEFAULT_LEVEL = 1;
  // You can even create a default sword class, which must be readonly
  private readonly Sword DEFAULT_SWORD_WEAPON = new Sword();

  // so then in the constructor

  public Warrior(int height, int height, int level)
  {
    this.AbilityPoints = DEFAULT_ABILITY_POINTS;
    this.SwordWeapon = DEFAULT_SWORD_WEAPON;
  }

  // Static Methods - These can only use static stuff

  public static void getDefaultValues()
  {
    Console.WriteLine($"Default Ability Points: {DEFAULT_ABILITY_POINTS}" +
      $"Default Level: {DEFAULT_LEVEL}"
    )
  }

// So then you can run this function in your Main like so:

Warrior.getDefaultValues();

// If you want to access values about an instance of the class, you can accept an instance as an arguemtn, remember you must specify the type, which is its class:

  public static void getDefaultValues(Warrior warrior)
  {
    Console.WriteLine($"Default Ability Points: {DEFAULT_ABILITY_POINTS}" +
      $"Default Level: {DEFAULT_LEVEL}" +
      $"Warrior's weapon damage: {warrior.DEFAULT_SWORD_WEAPON.Damage}"
    )
  }

  // Then you can pass your warrior to the call:

Warrior firstWarrior = new Warrior();

Warrior.getDefaultValues(firstWarrior);


// Static Classes - cannot have instances, rarely used. Can have constructors. We use the Console static class all the time, we don't instantiate it, but we use its methods all the time. Remember, there is only one Console, so we can't make new instances of it.

// Ex:

public static class Tools
{
  public static void ColorfulWriteLine(string text, ConsoleColor color)
  {
    Console.ForegroundColor = color;
    Console.WriteLine(text);
    Consoel.ResetColor();
  }
}

// Then you can call it by supplying the arguements:

Tools.ColorfulWriteLine(firstWarrior.ID.ToString(), ConsoleColor.DarkBlue);
Tools.ColorfulWriteLine(secondWarrior.ID.ToString(), ConsoleColor.Red);

// Enumerations - Limits the input from users - You would createa a new directory called `Enumerations`, then create a new class file like:

namespace Enumerations
{
  public enumm Faction
  {
    GoodGuy,
    BadGuy
  }
}

// Now the above Faction contains these two enums - how to use?

// we change this field
private string faciton
// to
private Faction faction;

