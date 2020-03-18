
/* Interactive Web Applications - Using jQuery
  -DOM (document object model) - the browser's representatin of the current state of the HTML content of the page. 
  -jQuery - JavaScript Library
  -Traversing - Finding particular elements in the DOM and updating them.
  -Manipulating - changing elements using jQuery

  * Note that when adding classes that manipulate the DOM, it's best practice to use js- as part of the class name to indicate this is acting on a code target. This organizes styling vs code classes. 

  * Also note that when using jQuery, you must link the library before you link a .js file that is dependant on the jQuery library. Ex: */

 <script
 src="https://code.jquery.com/jquery-3.2.1.min.js" 
 integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
 crossorigin="anonymous"></script>

  <script src="index.js"></script>

/* jQuery uses the same selectors as CSS, targeting elements such as <p><h1>, or even classes and IDs, .thisclass, #thisID. For example, the below declaration assigns all paragraph elements in the DOM to the variable paragraphElements: */

let paragraphElements = $('p');

/* The '$' is the jQuery object, which has methods for DOM manipulation and traversal. Seems to be how you select or TRAVERSE to different elements in the DOM. The below example adds a new class to the element with the .js-hide-it classs, while the second jQuery line changes the inner text of an element that was initially empty with the class .js-hello-world.  Imagine that the CSS class .hidden has display: none:, this would cause the element to be hidden from the page when that command is run: */

function doHelloWorld() {
  $('.js-hide-it').addClass('hidden');
  $('.js-hello-world').text('hello world from JS');
}

doHelloWorld();

/* When using $() jQuery method, you get a jQuery object back. You can use several methods to traverse the selected elements. 

.find() - used to traverse the elements contained in a jQuery selection using a filter condition. Searches all children elements that meet the search criteria, such as a class. 

.parent() - used to target the first parent element of a jQuery object that passes a filter condition. Ex: */

function doIt() {
  const toDos = $('.js-to-dos');
  // this will grab the first parent of toDos that has the `.js-parent-demo`
  // class
  toDos.parent('.js-parent-demo').removeClass('hidden');
  // this will look at all children of toDos that have the `.js-complete class`
  toDos.find('.js-complete').addClass('complete');
}

doIt();

/* Accessibility concerns in the context of DOM manipulation. Should consider who can use your app, and try not to exclude anyone. Should ask these questions: 
  1. When new info is added to the page, will all users know it's there?
  2. Will they know when the info is removed?
  3. Is the info easily understood by users of all abilities? */




/* Event Listeners - Consists of 2 parts. The "event" to listen for and the "callback function" that runs when the even occurs. 

  - Event listener - 
  - Callback function - 
  - Event objects - 
  - Event delegation - 
Ex: */

  // is meant to keep track of the number of times the user has clicked the "click me" button. Initially we set its value to zero.
  function handleClicks() {
    let clickCount = 0;
  
  // this line sets the inner text of the `.js-click-counter` element to the current value of `clickCount` (which is 0)
  $('.js-click-counter').text(clickCount);
  
  // this line says when the `.js-clicker` element is clicked, run the instructions inside the anonymous function (that is, the instructions between the {...} brackets).
  $('.js-clicker').click(function(event) {
    
    // any time the user clicks, we add 1 to the value of `clickCount ...
    clickCount += 1;
    
    // ...and display the updated click count in the `.js-click-count` element.
    $('.js-click-counter').text(clickCount);
  });
  }

  // this code just says that when the browser is done loading the page, it should run the `handleClicks` function we've defined above.
  $(handleClicks);

// Note that the above $(); calls the callback function once the page has loaded. Once the page is done loading, it emits a "ready" event. We use the $(callBackFunction) to activate applications.  

// *Note that ealier versions of jQuery < 3.0 used the built-in .ready() method, but this has been deprecated and should no longer be used. 

// DOM Event Objects - The callback functions in your event listeners always get access to an object representing the triggering event. This object contains the information about the event and HOW the action was performed. 

// Selecting first or last element when there are multiple: 

$("li:first").text() // will return the text content of the first li element.Uses semicolon. 

// The below function waits until the page loads, and then waits for the user to click their mouse or type in the input. In this case, "event" is the object that is created which contains the data, such as "which" and "key". .which contains info about which button was pressed in the mousedown event, while "key" contains info about which key was pressed in a keydown event. 

$(function() {
  $('button').mousedown(event =>
    $('.output').text(`Button clicked: ${event.which}`)
  );

  $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.key}`)
  );
});

// event.currentTarget - This contains info about which DOM element the user has interacted with. 


// event.stopPropagation() - This tells the browser to stop the event from "bubbling up" the DOM, and acting on parent elements or containers that might also match target code. 

// event.preventDefault() - the default action of the event will not be triggered. Does not accept any arguements. In the example below, the defautl behavior of a form submission is to submit it to a server (I think), which will actually cause the page to reload when it fails (I think). Therefore, by stopping this default behavior, you can then run something else. 

$('.js-form').submit(event => {
  // this stops the default form submission behavior
  event.preventDefault();
  const userTextElement = $(event.currentTarget).find('#user-text');
  $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
  userTextElement.val("");
});


// this keyword - Plays an important role in using jQuery event object. Allows properties and methods on an object to refer to other properties and methods defined on the same object. Important for callback functions. Inside of a callback function on an event listener, "this" refers to event.currentTarget. So, anywhere you would type event.currentTarget, you can replace with the "this" keyword. 

$(function() {
  $(".foo, p, ul, li").click(function(event) {
    event.stopPropagation();
    $("h2").text(`\`this\`'s text is: ${$(this).text()}`);
  });
});

// *Note that in the context of callback functions, "this" will not behave as expected if you use arrow functions. If using "this" to refer to the event object, use the function keyword. 

// .text() - if left empty, returns the text content of the selected element. 

// Event Delegation - Allows you to attach a single event listener to a parent element that will fire for ALL descendants matching a selector, whether those descendants exist now or are added in the future. By default, the browser "binds" listeners to elements once and only once, when the JavaScript is first processed by the browser. Due to this, event listeners ignore events related to any element that is created after the initial binding. 

// -- To fix this problem, we can monitor the PARENT element which DID exist when the DOM first loaded. In this example, instead of removing li that are clicked on, the even targets the ul, and any li clicked inside of it. 

$(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });
});

// The above example used the .on() method from jQuery. .click() is a shortcut for .on("click", "element", "function") method, which takes 3 arguements, the event and the element. So the above code is sayimng that when <ul> element is clicked, if that click is on an <li> within the <ul>, then run this callback function. Becuase <ul> was there when the DOM loaded, the event listener binded to <ul> and can respond to any clicks made on any <li> even if added later. 

// *Note - if using jQuery with event listeners on dynamically generated elements, use .on(), not .click and try to target parent element and filter for the more specific element you want to actually atch for. 

// Interactive images - User accessability. When we have images that we want to be interactive, specifically for people using screen readers, you can use <input type="image" src="webAddressHere"> instead! They can now interactive by tabbing across the inputs and using "space" to activate or interact. These are considered "graphical buttons". 


//  jQuery Tutorial Notes
// Source: https://www.youtube.com/watch?v=2OMzGhlIZpg

// Snytax:
$(selector).action()

// $ - selects and accesses a query
//  selector - denotes html element that needs to be manipulated
//  action() denotes a jQuery action to be performed on the html element

// .text() - returns the text content

// .text("changes to") - changes the text content

// .hmtl() - returns the content of a particular element: 

 $("li:last").hmtl() // returns the content of the last item in the list. 

 $("li:last").html("<li>German Shepherds</li>")  // changes the last list item html to the argument.

//  .ccs() - return content of first matched element, or sets content and overwrites content. You can even pass an object with css properties as key/value pairs, and pass the object as an argument to .css. Ex: 

let Design = {
    color: "red",
    background: "green",
    border: 2px solid black
}

$("body").css(Design)   // Will apply the object's properties and values as css styles to the body element. 

// .attr() Method - Returns content - returns the value of the first matched element. Or set content - one or more attribute value pairs. 

$("img").attr("border", "5px solid black")

// .val() - Return content - returns the current value of the first matched element. Or set content - it sets the value of the matched element. Value of the attribute



// $(element).click(function) - when click on the selected element, the callback function will run. The below example is taking the val() (value) in the input field with id="sometext", which causes an alert to appear with that text.  

$("button").click(function() {
    alert("Value: " + $("#sometext").val());
})

// $(selector).addClass() - Specifies the classes you would like to add. 

// $(selector).removeClass() - Specifies the classes you would like to remove. 

// $(selector).toggleClass() -  toggles between adding and removing one or more class to the selected element. 

// jQuery Events - 

// $(selector).click(function) - an event occurs when the selected element is clicked and the function runs. 

$("img").click(function() {
    $(this).hide();                 // Hides whatever element is selected with click that is an image. 
})

//  $(selector).on(event, function) - attaches one or more event handlers for the selected elements

//  $(selector).keypress(function) - event is executed when a character is entered. 
    // keydown() - when a key is pressed on the keyboard
    // keyup() - when a key is released on the keyboard

$("input").on("keypress", function() {
    $("p:last").hide();         // when a key is pressed on the input element, the LAST paragraph will become hidden.
})

// $(selector).hide(speed, callback); - hide a selected element. speed of the delay, possible values are slow, fast, and milliseconds.

// $(selector).show(); - shows hidden elements

// $(selector).toggle(speed, callback); - toggle between hidden and showing.

// $(selector).fadeOut(speed, callback); - Causes selected element to fadeOut. 

// $(selector).fadeIn(speed, callback); - will fadeIn elements that display: none; 

$(selector).fadeIn(3000); // 3 second fade in .

// $(selector).slideDown(speed, callback); - slide down a selected element. - Dislplay must initially be none.

// $(selector).slideUp(speed, callback); - slide up a selected element. Causes the element to dissapear. 



// jQuery UI - 

    // $(selector).droppable(); - used to make any DOM element droppable at a specified target. If you specify, the selected element must be placed in the specified element. 

    // $(selector).draggable(); - used to make any DOM element draggable after which you can drag it anywhere within the html page.  

    // $(selector).datepicker(); - widget facilitates users to enter dates easily and visually. Use on an input field with matching ID, class, or element.  Pretty cool!!!



// Acessing "uncle" elements/ancestors:

$(this).parent().prev();


// replaceWith() - can select an element and repalce with whatever back-ticked element inserted. Ex:

if (!responseJson.results[i].poster_path) {
  $(`#pic${responseJson.results[i].id}`).replaceWith(`
  <img src="missingImage.jpeg">`);
  console.log(
    `${
      responseJson.results[i].original_name
    } img element removed due to missing poster`
  );
}
}