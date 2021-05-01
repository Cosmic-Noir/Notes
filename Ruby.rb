=begin 
Ruby 

- High-level - meaning it is really easy.
- Interpreted - don't need a compiler to write and run Ruby. 
- Object Oriented - allows user to manipualte objects to build and execute programs. Everything in Ruby is an object. BUT apparently blocks of code are one of the few exceptions and are not objects. Because of this, blocks can't be saved to variables and don't have the abilities of a real object. 
-Easy to use - Designed by Yukihiro Matsumoto (often called "Matz") in 1995. Wanted to designed something that emphasized human needs over those of the computer. 
- NOT camel-case, two word variables are named with a _ between words ex:
    my_name = "Kristen

- Only 3 Data Types in Ruby:
    - Numeric, Boolean, and String. 

Declaring - notice no semi-colon at the end like in javaScript: 
=end

my_num = 25

# Printing to the Console - use 'puts' and 'print'. 
  #   - puts - adds a new blank line after the thing you want it to print. Ex:

    puts "What's up?"
    print"Oxnard Montalvo"

# Methods - methods are summoned with a '.' . Note that if the method ends in an ? it returns a boolean value. Ex:

puts "I love espresso".length

# ==> 15

# *** Note that methods are defaultly public, unless you specify that they are private/public. Note that everything AFTER the keyword through the end of the class definition will be public/private. Explicitly setting method to public:

class ClassName
  # class stuff
  public
    def public_method
      # public_method stuff
    end
  end
end

# *** Note that a private method can only be called inside of the class that owns the private method. Ex:

class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end
  
  public
  def bark
    puts "Woof!"
  end
  
  private
  def id
    @id_number = 12345
  end
end

# Note that Ruby expressions implicitly return the value of their last evaluated function, unlike in javaScript, which returns undefined, or phython, which returns none. So, there isn't a need to use a return statement in a one line block of code, so that the below:

def add(a,b)
    return a + b
  end

# Now becomes, and will return the value implicitly:

def add(a,b)
    a + b
  end

# - .collect - takes a block and applies the expression in the block to every element in an array. Sounds like .map in JS. Note that this makes a COPY of the array, but does not modify the original array. 

my_numbs - [1, 2, 3]
my_nums.collect { |num| num*2 }

# To make it mutate the original array, use the !

my_nums.collect! { |num| num*2 }

# now the array would be changed


# - .each_key - maps each key in an object

my_hash = {
  hey: "hi"
  hi: "hey"
}

my_hash.each_key { |k|
puts k
} # prints "hi" and "hey"


# - .each_value - maps each value in an object

my_hash.each_value { |y|
  puts y
} # prints hey and hi 



# - .length - returns length. Ex:

puts "Yay I'm gonna make $$$".length

# - .reverse - returns string backwards. Ex:

puts "Kristen".reverse

# - .upcase/.downcase - convert to upper or lower case. Ex:

puts "Kristen".upcase
puts "Kristen".downcase

# - .capitalize - Capitlizes the first letter of a string and makes the rest lower case. 

# - .downto - Used to traverse or count down

# **** Missing ex *****

# - .include? - checks if the string contains given substring and returns true or false. Ex:

    if string_to_check.include? "substring"

# - .gsub! - "Global Substitution" - Note there is NO space between the ! and (

rb string_to_change.gsub!(/s/, "th") 

# - .select - Can use this to map over a hash and use key/value to return only pairs that meet the criteria:

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!


good_movies = movie_ratings.select { |x, y|
  y > 3
}

# - .sort_by - Can sort an object by either key or values and return an array of arrays? Ex sorting arary: *** Note that .sort will create a COPY of the array that is sorted. Note that .sort! modifies the actual array/object.

my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2]

# my_array should then equal [1, 2, 3, 4, 5, 6, 7, 8, 9].

my_array.sort!
puts my_array

# - .split - takes a string and returns an array, takes an argument called a 'delimiter':

text.split("")
text.split(" ")
text.split(",")

# - .to_i - turns a string into an integer. 

mine = "3"

puts mine.to_i  # should output the number 3

# - .to_s - Tuns a number into a string

frequencies.each { |word, count|
  puts word + " " + count.to_s
}

# - .to_sym - turns string into symbol

"sasquatch".to_sym
# ==> :sasquatch

# - .intern - also turns a string into a symbol

"hello".intern
# ==> :hello

# Chaining Methods: Can do seperately or chained together:

name = "Kristen".downcase.reverse.upcase

puts name

# Getting Input - 
 # - gets - Ruby method that gets input from user. Auto adds new line after user input.
 # - .chomp - removes extra line if you want. 

 print "What's your first name?"
first_name = gets.chomp

# String Interpolation - uses #{} . 

# Note that if you want to store a modified value in a variable instead of storing in a new value, use ! at the end of a method:

print "What's your first name?"
first_name = gets.chomp
first_name.capitalize!
print "What's your last name?"
last_name = gets.chomp
last_name.capitalize!
print "What city are you from?"
city = gets.chomp
city.capitalize!
print "What state Abreviation are you from?"
state = gets.chomp
state.upcase!

print "#{first_name} #{last_name} is from #{city} #{state}"


# Control Flow - uses if / else / end 

if 1 > 0
  print "Something is very right"
else 
  print "Something is very wrong"
end

# elsif - If there is more than two options 

if 1 > 2
  print "Something is very right"
elsif 
  2 > 3
else 
  print "Something is very wrong"
end

# Example:

me = 30
you = 29

if me < you
  print "You're older than me"
elsif you > me
  print "I'm older than you"
else 
  print "We're the same age!"
end



# unless - if you want to check if something is FALSE. 

hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

# Another way to use the unless method is like a shortcut if statement:

problem = false
print "Good to go!" unless problem

#  Example:

cost = 1000

print "We can afford it" unless cost > 2000

# You can also make unless a one-line statment, with the syntax of : expression unless boolean. ex:

puts "Test result negative" unless true

# Case Statements - When you have many things to check for, or many "cases". Ex:

movies = {
  "Cloud Atlas": 10
}

puts "Hello, what would you like to do?"

choice = gets.chomp

case choice
  when "add" 
    puts "Added!"
  when "update"
    puts "Updated!"
  when "display"
    puts "Movies!"
  when "delete"
    puts "Deleted!"
  else 
    puts "Error!"
end

# Case statements can also be done in a single line using keywords, 'case, when, then end'. Ex:

puts "Hello there!"
greeting = gets.chomp

case greeting when "English" then puts "Hello!" when "French" then puts "Bonjour!" when "German" then puts "Guten Tag!" when "Finish" then puts "Haloo!" else puts "I don't know!" end


# Loops and Iterators - while, until, for loops. For loops, like in JS, are for when you know how many times you want to loop. 

i = 0
while i < 5
  puts i
  i = i + 1  
end

# Assignment Operator - link in Javascript, instead of long incrematations of variables, you can use the assignment operators: +=, -=, *=, and /=.

counter += 1

# Inclusive and Exclusive Ranges - When creating a range, there are two syntactical options: .. or ... , where .. indicatses inclusion of the last digit, and ... means up to, but not including the last digit. Ex:

# does NOT include 10 

for num in 1...10
  puts num
end

# does include 15

for num in 1..15
  puts num
end


# Loop Method - You can repeat an action using Ruby's 'iterator' method to repeatedly invoke a block of code. Ex of infinite loop:

loop { print "Hello, world!"}

# {} - In Ruby, these are generally interchangeabel with the keywords 'do' and 'end' to open and close a block of code. With this, we can write a better loop than the above, where 'break' is the break condition used to end the loop if a condition is met:

i = 0
loop do
  i += 1
  print "#{i}"
  break if i > 5
end

# next - keyword used to skip overtain certain iterations in a lop. Ex:

for i in 1..5
  next if i % 2 == 0
  print i
end

# Ex:

i = 20
loop do
  i -= 1
  next if i % 2 != 0
  print "#{i}"
  break if i <= 0
end

# Arrays - 

my_array = [1, 2, 3, 4, 5]

# .each - Applies an expression to each element of an object, one at a time. Where the | | syntax is for whatever you want to call each individual key. Syntax:

object.each {  |item|
  # do something
}

# do - keyword you can use with end instead of {}

object.each do |item|
  # do something
end

# Ex:

odds = [1,3,5,7,9]

odds.each { |x| 
  print x * 2
}

# .times - method that is like a compact 'for' loop. Can perform a task on each item in an object a specified number of times. Ex:

10.times { print "Chunky!" }

# until - looping with unitl - 

# for - Just another way to do things. Ex:

for k in 1..50
    print k
end

# Ex:

n = 0
loop do
  n += 1
  print "Ruby!"
  break if n == 30
end

# .times - ex:

# Example of building a small program :


# Hash Maps - Key value pairs are assigned with the => like so:

hash = {
  key1 => value1,
  key2 => value2,
  key3 => value3
}

# You can also create a new Hash by calling it with the .new method and assigining it to a variable name:

pets = Hash.new

# You can add key value pairs in two ways, by addinto to the hash literal with key value pairs inbetween the brackets, or like this:

pets["Ted"] = "Theodore"

# Accessing the values in an array is the same as JS:

puts pets["Ted"]  # prints Theodore

# Iterating over objects and arrays is similar and you can use .each and you can even use two variables to represent the key value pairs:

friends = ["Milhouse", "Ralph", "Nelson", "Otto"]

family = { "Homer" => "dad",
  "Marge" => "mom",
  "Lisa" => "sister",
  "Maggie" => "sister",
  "Abe" => "grandpa",
  "Santa's Little Helper" => "dog"
}

friends.each { |x| puts "#{x}" }
family.each { |x, y| puts "#{x}: #{y}" }

# You can easily iterate through arrays:

languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

languages.each { |language| 
  puts language
}

# Iterating over mutli dimensional arrays - Creat nested .each loops:

s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each { |array| array.each { |item| puts item}}

# With Hash Maps you have to have two variables, one for each key and value in the map.

secret_identities = {
  "The Batman" => "Bruce Wayne",
  "Superman" => "Clark Kent",
  "Wonder Woman" => "Diana Prince",
  "Freakazoid" => "Dexter Douglas"
}
  
secret_identities.each {|x, y| puts "#{x}: #{y}" }

# Hash maps also take an optional argument of the default value for any key added without a value. Note that if you try to access a key that does not exist, you get the default value.

h = Hash.new(0)
h = Hash.new("default value")

# Example of a small program that takes user input, splits the words into an array, creates a new hash table with a default value of 0, 
then for each word in the array, it adds the word to the hash at a value of 1, or the existing value is increased by 1. Then, the hash
is sorted by the count, then reversed, then another .each loop prints the word and count of each key value pair. 

puts "Please type something:"
text = gets.chomp
words = text.split(" ")

frequencies = Hash.new(0)

words.each { |word | 
frequencies[word] += 1
 }

frequencies = frequencies.sort_by do |word, count|
  count
end

frequencies.reverse!

frequencies.each { |word, count|
  puts word + " " + count.to_s
}

# Methods - Methods are declared with the 'def' keyword. That method can then be called by simply "calling" it. Ex:

def welcomeMethod 
  puts "Welcome!"
end

welcomeMethod

# Note that if the method dosen't exist when you call it, you will get a nameError.

# Arguemnts - a method takes arguments, which can be specified in the method, and then entered when you call the method like so:

def cubertino(n)
  puts n ** 3
end

cubertino(8)

# Splat Arugments - * is used to indicate that an parameter can accept more than one arugment. Ex:

def what_up(greeting, *friends)
  friends.each { |friend| puts "#{greeting}, #{friend}!" }
end

what_up("What up", "Ian", "Zoe", "Zenas", "Eleanor")

# Return - when you want a value returned from a method. Exs:

def greeter(name)
  return "Hello, #{name}!"
end

def by_three?(num)
  if num % 3 == 0
    return true
  else
    return false
  end
end

# Blocks vs Methods - Blocks are like ananymous functions in JS. Interesting examples:

# method that capitalizes a word
def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}"
end

capitalize("ryan") # prints "Ryan"
capitalize("jane") # prints "Jane"

# block that capitalizes each string in the array
["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} # prints "Ryan", then "Jane"

# - <=> - Combined Comparison Operator - This will return 0 if the items are equal, 1 if the second arg is greater, and -1 is the first is greater:

book_1 = "A Wrinkle in Time"

book_2 = "A Brief History of Time"

puts book_1 <=> book_2

# returns 1

# Descending sort - .sort! does take a block of code if  you want to sort something in descending order, just compare the items in opposite order:

books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below

books.sort! { |firstBook, secondBook| secondBook <=> firstBook}

#  Default arguments - note in this example that you can have a parameter with a default value that does not need to be added when calling the method

# Iteraing over Hashes - You can use the .each method: 

matz = { "First name" => "Yukihiro",
  "Last name" => "Matsumoto",
  "Age" => 47,
  "Nationality" => "Japanese",
  "Nickname" => "Matz"
}

matz.each do |key, value|
  puts matz[key]
end

# nil - essentially seems to be null - evaluates to false in Ruby. 

# Symbols - Starts with a : then either a char or _ . Primarily used as an object key or for referencing a method. Symbols make good keys in objects for 3 reasons: 1. They are immutable. 2. Only one can exist at a time. 3. Because of the above two factors, symbols are faster as keys than strings. 

my_first_symbol = :some

# Ex of changing an array of strings to an array of symbols: 

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = []

strings.each { |s| 
  symbol = s.to_sym
  symbols.push(symbol)
}

# Apparently after Ruby 1.9, hash syntax changed to match javaScript with the colons being at the end of the symbol name and no need to use the =>. So hash's now look like js:

myHash = {
  new: 1,
  two: 2, 
  three: 3
}

# Simpler if statements 

expression if boolean

# Ex:

puts "It's your birthday!" if true


# Ternary condition - Has this syntax: boolean ? Do this if true : Do this if false. Ex:

puts 1 > 2 ? "Kitties rule!" : "Dogs rock!"


# Conditional Assignment - You can use ||= to 'conditionally assign' a variable, meaning that it will be set to the assigned value IF it doesn't already have another value, otherwise it will remain the same. Ex:

favorite_book = nil
puts favorite_book

favorite_book ||= "Cat's Cradle"
puts favorite_book

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book




# >> - Concatenation operator - can be used instead of using .push:

[1, 2] >> 3

# Yield - Keyword that essentially passes control back and forth from the method and the block of code. In this example, double is called with an argument of 2, in the method double, the yield() method passes n BACK to the block of code below, where it accepts n, and then puts n * 2. 

def double(n)
  yield(n)
end

 double(2) { |n| puts n * 2}

 # Proc - a "saved" code block, helps prevent repeating yourself. You use Proc.new and pass the block you want to save. 

 cube = Proc.new { |x| x**3 }

 # Due to this, we can pass Procs in as a block argument when using a method. When you want to use a Proc as an argument as the blok of a method, use the & :

 [1, 2, 4].map!(&cube)


# Example of this using .floor to round the float numbers to round numbers. 

floats = [1.2, 3.45, 0.91, 7.727, 11.42, 482.911]
# Write your code below this line!
round_down = Proc.new { |x| x.floor }


# Write your code above this line!
ints = floats.collect(&round_down)
print ints

# You can actually call Procs without passing them as arguments to a method. Instead, you use the .call method on the Proc variable itself. 

hi = Proc.new { puts "Hello!" }

hi.call

# You can also convert symbols to Procs using &

strings = ["1", "2", "3"]

nums = strings.map(&:to_i)

# Another ex:

numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

strings_array = numbers_array.collect(&:to_s)

puts strings_array

# Lambda - the same as using Proc.new? Syntax: lambda { |param| block }. Lambdas check the number of args, while a Proc does not. Also, a Proc returns control immedietly, while a lambda will let the block finish and then pass contorl back ? 


strings = ["leonardo", "donatello", "raphael", "michaelangelo"]

symbolize = lambda { |x| x.to_sym }

symbols = strings.collect(&symbolize)
print symbols


# Another example of using a lambda as a bloc argument with a method

my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]

symbol_filter = lambda { |x| x.is_a? Symbol}

symbols = my_array.select(&symbol_filter)

# Ex using Proc: 

odds_n_ends = [:weezard, 42, "Trady Blix", 3, true, 19, 12.345]

int_checker = Proc.new { |x| x.is_a? Integer }

ints = odds_n_ends.select(&int_checker)

puts odds_n_ends

# Ex using a lambda with a hash:

crew = {
  captain: "Picard",
  first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro",
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"
}
# Add your code below!
first_half = lambda { |key, value| value < 'M' }

a_to_m = crew.select(&first_half)

# Class Syntax - Classes start with a capital letter and follow CamelCase, not underscores. 

class NewClass
    # class magic here
end

# initialize - creates the instance of the class: 

class Person
	def initialize
  end
end

# @ - Always use this before an instance variable, meaning that the variable is attached to the instance of the class. So kitt, the instance of class Car, which has its' own instance variables, "Pontiac" and "Trans Am".   Ex:

class Car 
    def initialize(make, model)
      @make = make
      @model = model
    end
end

# Creating a new instance of a class - Use the .new to do so. Ex:

kitt = Car.new("Pontiac", "Trans Am")

# Scope - The scope of a variable is the context in which it is visible to the program. Global are available everywhere, while local variables are only avaiable inside certain methods. Others are class variables (belong to a class), or instance variables (variables only available to that particular instance of a class).

# Class Variables - belong to the class itself and always start with @. 

  class myClass
    @@class_variable
  end

# Example of creating a class variable that increments everytime a new instance of the class is initialized and has a method to return that count:

class Person
  # Set your class variable to 0 on line 3
  @@people_count = 0
  
  def initialize(name)
    @name = name
    # Increment your class variable on line 8
    @@people_count += 1
  end
  
  def self.number_of_instances
    # Return your class variable on line 13
    @@people_count
  end
end

matz = Person.new("Yukihiro")
dhh = Person.new("David")

puts "Number of Person instances: #{Person.number_of_instances}"

# Global Variables - can be declared in two ways. Like in JS, avoid global pollution and avoid global variables. 
  # 1. Just define the method outside of any method or class. 
  # 2. If you want to make it global inside of a class or method, just start it with $. 

# Inheritance - Use < to have a new class inherit class variables and methods from a parent class:

class Application
  def initialize(name)
    @name = name
  end
end

class MyApp < Application 
end

# You can also override methods or variables from parent classes by redefining them:

class Creature
  def initialize(name)
    @name = name
  end
  
  def fight
    return "Punch to the chops!"
  end
end

# Add your code below!
class Dragon < Creature
  def fight
    return "Breathes fire!"
  end
end

# super - Sometimes you want to access the method of the parent or superclass - you can do this with the super keyword. The super keyword causes Ruby to look in the superclass of its current class and find a method with the same name as the one from which super is called. 

class DerivedClass < Because
    def some_method
      super(optional args)
      # some stuff
    end
end

# You can also access the original method by using the super keyword inside of the subclass. ** Note that Ruby does not allow multiple inheritance, meaning a subclass can have only one superclass. 

class Creature
  def initialize(name)
    @name = name
  end
  
  def fight
    return "Punch to the chops!"
  end
end

class Dragon < Creature
  def fight
    puts "Instead of breathing fire..."
    super
  end
end

# If you have a class you want as one line, you can use ; to make it one line. So that the below:

class Monkey
end

# becomes:

class Monkey; end

# superclass mismatch for class "____" - You will get this error if you have a class inhereting from more than one parent like this:

class Creature
  def initialize(name)
    @name = name
  end
end

class Person
  def initialize(name)
    @name = name
  end
end

class Dragon < Creature; end
class Dragon < Person; end

# Class Methods - Contain the name of the class .method:

class Machine 
  def Machine.hello
    puts "hello"
  end
end

# Time.now - Returns current time
time = Time.now
puts time 

# attr_reader, attr_writer - Instead of creating a method to return an instance variable, we can use these methods. We can do this by setting these variables to the class variable. So that this:'

class Person
  def initialize(name, job)
    @name = name
    @job = job
  end
  
  def name
    @name
  end
  
  def job=(new_job)
    @job = new_job
  end
end

# Becomes this:

class Person
  attr_reader :name
  attr_writer :name
  
  attr_reader :job
  attr_writer :job
  
  def initialize(name, job)
    @name = name
    @job = job
  end
end

# attr_accessor - can be used to both read and write variables:

class Person
  attr_reader :name
  attr_accessor :job
  
  def initialize(name, job)
    @name = name
    @job = job
  end
end


# Module - a toolbox that contains methods and constants. Modules are like classes, except you can't create instances or have subclasses. They are just for storing things. They are also Capitilized and CamelCase You make modules like you do classes syntax wise:

module moduleName
    # Module stuff
end

# *** Some modules are available globally, but some need to be imported. Use require 'module' to import explicitly:

require 'date'

puts Date.today

# *** Note also that any class that includes a certain module can use those module's methods. When you do this, You no longer have to pre-apend constants with their module and ::. You can simply call the constant PI. Use the 'include' keyword:

class Angle
  include Math
  attr_accessor :radians
  
  def initialize(radians)
    @radians = radians
  end
  
  def cosine
    cos(@radians)
  end
end

acute = Angle.new(1)
acute.cosine

# Mixins - this is when you include a module into a class, like shown above. This allows you to call methods from the module via the class itself. Mixins allow you to mix traits and mimic inheriting from more than one class: 

module Action
  def jump
    @distance = rand(4) + 2
    puts "I jumped forward #{@distance} feet!"
  end
end

class Rabbit
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

class Cricket
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

peter = Rabbit.new("Peter")
jiminy = Cricket.new("Jiminy")

peter.jump
jiminy.jump

# *** Note in the examples above, this allows access at the INSTANCE level, meaning that INSTANCES of the class can use the methods of the module, NOT the class itself. 

# extend - keyword that allows the CLASS itself to use the methods and constants of a module. 

module ThePresent
  def now
    puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
  end
end

class TheHereAnd
  extend ThePresent
end

TheHereAnd.now

# Ruby Constants - Written in all caps with _ . It's not necessary to keep the same value for a constance once its initialized, but it will warn you when you try to change it. An example is a contant variable that lives in a module:

module Circle

  PI = 3.14
end

# Resolution Scope Operator :: - Directs Ruby WHERE to look for the constant variable, as there may be two with the same name, but in two different Modules. Imagine two Modules, Math and Circle, and they both have a constant variable, PI. You differentiate them like so:

Math::PI
Circle::PI


# BIg numbers - apparently you can use underscores in numbers and ruby will ignore them, making things more readable. Ex:

1_000_000


# Ruby Metaprogramming Notes:

