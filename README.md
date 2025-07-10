# MERN-Frontend
Hi all, welcome to my daily learnings of basic concepts of HTML.   

Day 1 (Monday, 16-06-2025)  

     => HTML is NOT case sensitive.    
     => learnt about basics of html.  
     => Before writing html code, mention `<!DOCTYPE html>` to declare document type.  
     => Heading tags are from `<h1>` to `<h6>` in decreasing order of importance.  
     => `<br>` is an empty tag used for line break.  
     => All html elements can have attributes to provide additional information about elements.  
     => src attribute in 'img' have 2 types of url, absolute and relative.   
     => `<pre>` tag is used for writing pre formatted text.  

References: https://www.w3schools.com/html/default.asp 


Day 2 (Tuesday, 17-06-2025)

     =>Learnt about inline and block elements. 
     =>Block elements use 100% of width and margins and paddings can be adjusted.
     =>Inline elements use only required width and overrule margins and paddings.
     =>We can insert inline element inside block element but cannot insert block element inside inline element.
     =>iframe is used to insert a webpage inside existing webpage.
     =><video> & <audio> tags are used to insert media in webpage.
     =>Youtube videos can be played inside iframe using yt url + video id as src.
     =>Can turn on features like autoplay & mute by adding "?autoplay=1&mute=1" in url.

References: https://www.w3schools.com/html/default.asp

Day 3 (Wednesday, 18-06-2025)

     =>Block element can be displayed horizontally instead of vertically using float:left, inline-block and flex.  
     =>Use margin:auto to center align `<div>` content.
     =>display:grid is used to display cards in a grid format. `grid-template-columns:33% 33% 33%` is used to specify space.
     =>plug-in feature is used to extend functionality like- virus scan, map, verification.
     =>plug-in can be achieved using `<object>`, `<embed>`.
     =>Learnt about table and `<rowspan>` to merge 2 or more rows.
     =>Learnt about `<colspan>` to merge 2 or more column.
     =>Use `table-layout:fixed` to see visible rowspan and colspan.

References: https://www.w3schools.com/html/default.asp

Day 4 (Thursday, 19-06-2025)

     =>`<form>` is used to create html forms.
     =>`<label>` is used to increase accessibility for screen readers and toggles to input when clicked on.
     =>'<input>' is used to define input. It can be of type= text, checkbox, radio, button, submit.
     =>`Name' attribute is a MUST with `<input>' to submit values.
     =>`<select>` is used for drop-down with attributes id and name, attribute size and multiple is used to select more than one option.
     =>`<option value="xyz"> xyd </option>` is used to define option values.
     =>`<text area rows='10' cols='10'></textarea>' is used to define multiple line input.
     =>`<feildset>` is used to group related data into the form & `<legend>` is used to caption that related data.
     =>`<datalist>` is used to pre define the options for input tag.

References: https://www.w3schools.com/html/default.asp

Day 5 (Friday, 20-06-2025)

     => If both external and internal css is defned, the value of last read css will be used.
     => Inline css has the highest priority.
     => In RGBA , A has value from 0 (fully transparent) to 1 (Not transparent at all).
     => Learnt about CSS properties. Display : Flex, Justify-content to align horizontally wrt. flex direction.
     => Align items is used to align vertically wrt. flex direction.
     => Use border, margins, paddings to make container more appealing.
     => Learnt about basic git commands. First initialise the repo. git checkout -b testbrance for a new branch.
     => git push, pull, merge are some basic day to day commands. NEVER use (git .add) because it may add the codes you don't want to push.
     
References: https://www.w3schools.com/html/default.asp

Day 6 (Monday, 23-06-2025)

     => Javascript is a web-language.
     => Variables can be declared using var, let and const in javascript.
     => Var: Can be re-declared, re-assigned, bind this, has global scope.
     => Let: Can be re-asssigned, Can't be re-declared, Can't bind this, has block scope.
     => Const: Can't be re-assigned, re-declared, bind this, has block scope.
     => var supporst hoisting but let and const does not.
     => There are 8 primitive datatypes in javascript- String, boolean, number, bigint, null, undefined, symbol, object.

References: https://www.w3schools.com/html/default.asp
            https://www.youtube.com/watch?v=Icev9Oxf0WA

Day 7 (Tuesday, 24-06-2025)

     => Javascript works from left-to-right. Meaning 6+5+"hello" will result into 11hello.
        But, "hello"+6+5 will result into hello65.
     => Learnt about @media to make a website responsive for different screen sizes.
     => Started working on project "html-css-task"   

References: https://www.w3schools.com/html/default.asp

Day 8- Day 10 (Wednesday, 25-06-2025 to Friday, 27-06-2025) [html-css-task]

     => Made the project html-css-task with a lot of learnings.
     => Make container for every section to give properties like margin, padding at once.
     => Used various css properties like flex, grid, image to make website appealing.
     => Learnt to write js functions for responsive navbar and scroll buttons.
     => Learnt to make website responsive for different breakpoints using @media query.
     => Use semantic tags and meaningful class names for better readibility of code.
     => Prefer to use px instead of % in css properties values.
     => Use z-index for layering a section or element.
     => Overflow control: overfloy-x: hidden/ auto to hide overflow content or make it scrollable.
     => Use max-width instead of fixed width to allow containers to shrink on small screens.
     => Use img with width: 100%  for responsive images.  

Day 11 (Monday, 30-06-2025)

     => Started javascript basics, learnt about strings and array methods.
     => Comparing 2 js objects either by `==` or `===` always returns false.
     => slice(start, end) is used to extract string  part.  End is not included. If parameter is negative, it starts from end od string.
     => Strings are immutable, They don't modify original string but its copy.
     => split() converts string into array.
     => typeof array is object. Arrays use numbered index while objects use named indexes.
     => pop() removes last element of array and returns removed item.
     => push() adds new element to array at end and returns new length of the array.
     => shift() removes first element and returns the removed element.
     => unshift() adds element at array start and return ne warray length.
     => splice(index, items to delete, "new items") is used to add new items to array.
     => slice(start, end[not inclusive]) is used to slice out a piece of array into new array.
     => sort() sorts array alphabetically. It returns wrong value when operated on numbers so
        always use comparator function while using sort().
     => Laernt about array iteraations using foreach(), map(), filter(), flatmap().

References: https://www.w3schools.com/js/js_arrays.asp
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

Day 12 (Tuesday, 01-07-2025)
     => Learnt about JavaScript Objects - used to store multiple values in a single variable using key-value pairs.
     => Syntax: { key: value } - keys are strings (or symbols), values can be of any type including arrays, functions, or even nested objects.
     => Accessing values via dot notation (obj.name) and bracket notation (obj["name"]).
     => Updated object properties dynamically, deleted keys using delete obj.key.
     => Introduced to nested objects and how to traverse or access deep properties.
     => Learnt how to loop over objects using for...in, and how to extract keys/values using Object.keys(), Object.values(), and Object.entries().
     => Understood that objects are reference types - assigning them to another variable creates a reference, not a copy.

References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

Day 13 (Wednesday, 02-07-2025)
     => Started deep-diving into JavaScript Functions.
     => Learnt about different types of functions:
        - Function Declaration - hoisted to top of scope.
        - Function Expression - not hoisted, stored in a variable.
        - Arrow Functions - concise syntax, lexical this (does not have its own this).
     => Explored default function parameters, arguments object, and rest parameters (...args).
     => Implemented functions that return other functions - functional programming basics.
     => Studied Immediately Invoked Function Expressions (IIFE) for scope isolation.

References:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

Day 14 (Thursday, 03-07-2025)
     => Studied JavaScript Execution Context - how code is executed line by line.
     => Phases of execution:
        1. Creation Phase - memory allocated to variables and functions.
        2. Execution Phase - code is actually run.
     => Each function call creates a new execution context, which is pushed to the Call Stack.
     => Learnt about Lexical Scope and how inner functions can access variables of outer functions.
     => Understood the concept of Closures - functions remember the variables from their scope even after the outer function has finished executing.
     => Studied Hoisting in more depth: var declarations are hoisted but initialized as undefined; let and const are hoisted to TDZ (Temporal Dead Zone).

References:https://www.freecodecamp.org/newsexecution-context-how-javascript-works-behind-the-scenes/

Day 15 (Friday, 04-07-2025)
     => Introduced to Asynchronous JavaScript and why it's needed.
     => Understood that JS is single-threaded but supports async behavior via the event loop and Web APIs.
     => Learnt how setTimeout and setInterval are non-blocking.
     => Started working with Promises - objects representing eventual completion/failure of an async operation.
     => Methods:
        - then() - handles resolved promise
        - catch() - handles rejected promise
        - finally() - runs no matter resolved or rejected
     => Used Promise.all, Promise.race, and Promise.allSettled for handling multiple promises.

References:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

Day 16 (Monday, 07-07-2025)
     => Started learning Async/Await, a cleaner way to write asynchronous code.
     => async functions return a promise by default.
     => await pauses the execution of an async function until the promise is settled.
     => Explored error handling with try...catch around await statements.
     => Learnt that await only works inside async functions and simplifies the chaining of multiple async calls.
     => Converted promise chains into async/await for better readability.

References:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

Day 17 (Tuesday, 08-07-2025)
     => Started with DOM - Document Object Model.
     => The DOM represents the structure of a webpage as a tree of objects.
     => Learnt to select elements using:
        - getElementById, getElementsByClassName
        - querySelector, querySelectorAll
     => Manipulated content using innerHTML, textContent, and styles using style and classList.
     => Created new elements with createElement, added with appendChild, removed using removeChild.
     => Practiced real-world scenarios like dynamic image galleries and list generation.

References:https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

Day 18 (Wednesday, 09-07-2025)
     => Learnt about DOM Events and how to handle them.
     => Used addEventListener to attach events like click, mouseover, submit, and input.
     => Understood the event object and its properties: target, type, preventDefault(), etc.
     => Explored event bubbling and capturing - and how to stop them using stopPropagation().
     => Implemented form validation, toggling sections, dropdown menus using events.
     => Discussed debouncing and throttling for optimizing event-heavy code like scroll and input handlers.

References:https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

Day 19 (Thursday, 10-07-2025)
     => Did a full recap and practical application of all JS concepts learned so far.
     => Created an interactive mini-project combining DOM manipulation, events, and async calls.
     => Examples included:
        - Toggleable dark/light mode
        - Accordion and tab layout
        - Fetching data from API and rendering it in real-time
     => Understood real-world flow of execution from user interaction → event handling → DOM updates.
     => Observed how JavaScript powers dynamic behavior in modern web applications.