/**
 
** Q.1 What’s difference between Synchronous and Asynchronous? **
The terms "synchronous" and "asynchronous" refer to different ways of executing tasks or operations in a program, particularly when it comes to handling time-consuming or blocking operations.

1. Synchronous:
   - Synchronous operations are executed one after another in a sequential manner. The next operation waits for the current operation to complete before it starts.
   - In a synchronous execution model, the program flow is blocked or paused until a particular task is finished. This means that the program must wait for each task to complete before moving on to the next one.
   - Synchronous operations are straightforward and easy to reason about, as they follow a predictable order of execution.
   - However, synchronous operations can potentially block the execution and make the program unresponsive if a task takes a long time to complete or gets stuck.

2. Asynchronous:
   - Asynchronous operations do not block the program flow. They allow multiple operations to be initiated without waiting for each one to complete before moving on.
   - In an asynchronous execution model, tasks are started, and the program continues executing without waiting for their completion. The program receives a notification or a callback when a task finishes.
   - Asynchronous operations are commonly used for time-consuming tasks, such as making API calls, reading/writing files, or performing network operations, as they allow other parts of the program to continue executing.
   - Asynchronous operations are generally more efficient and can help improve program responsiveness by preventing blocking and allowing parallelism.

To summarize, synchronous operations are executed one after another in a blocking manner, while asynchronous operations allow multiple tasks to be initiated and executed concurrently without blocking the program flow. Asynchronous operations are commonly used when dealing with time-consuming tasks or operations that may cause delays, allowing programs to remain responsive and efficient.

** Q.2 What are Web Apis ? ** 
Web APIs (Application Programming Interfaces) are sets of rules and protocols that allow different software applications to communicate and interact with each other over the internet. In simple terms, they are a collection of tools and functionalities provided by web browsers to developers, enabling them to build web applications that can access and utilize various features and services.

Web APIs serve as intermediaries, allowing developers to access and manipulate web browser functionalities and services, such as retrieving data from remote servers, manipulating the Document Object Model (DOM), interacting with user input, controlling multimedia playback, and much more. They provide a standardized way for web applications to interact with different resources and services available on the web.

Here are a few examples of common web APIs:

1. XMLHttpRequest (XHR) API: This API enables sending HTTP requests to servers and receiving responses, making it possible to retrieve data from remote servers without reloading the entire web page.

2. DOM API: The DOM API allows web applications to manipulate the structure, content, and styling of HTML and XML documents. It provides methods and properties to dynamically modify and interact with the elements and attributes of a web page.

3. Geolocation API: This API enables web applications to retrieve information about the user's geographical location, such as latitude and longitude, providing opportunities for location-based services.

4. Fetch API: The Fetch API provides a modern, more flexible way to make HTTP requests and handle responses in web applications. It offers a more intuitive and powerful alternative to the older XMLHttpRequest API.

5. Web Audio API: This API allows web applications to generate, manipulate, and process audio content, making it possible to create interactive audio experiences and applications directly in the browser.

These are just a few examples of the wide range of Web APIs available. Web APIs empower developers to leverage the capabilities of web browsers and build feature-rich web applications that interact with various web services and resources, enhancing the user experience and functionality of websites and web applications.


 ** Q.3 Explain SetTimeOut and setInterval ? ** 
Sure! Let me explain `setTimeout` and `setInterval` in simple language.

1. setTimeout:
   - `setTimeout` is a built-in JavaScript function that allows you to schedule a single execution of a specified function after a specified delay.
   - It takes two parameters: the function you want to execute, and the delay (in milliseconds) before the execution.
   - Once the delay expires, the specified function is executed only once.
   - It's commonly used to introduce delays or schedule tasks that need to be executed after a certain period.

Here's an example:

```javascript
setTimeout(() => {
  console.log("Delayed execution after 2 seconds");
}, 2000);
```

In the above code, the `console.log` statement will be executed after a delay of 2 seconds (2000 milliseconds). The `setTimeout` function schedules the execution of the provided function after the specified delay.

2. setInterval:
   - `setInterval` is another built-in JavaScript function that allows you to repeatedly execute a specified function at a fixed interval.
   - It takes two parameters: the function you want to execute, and the interval (in milliseconds) between each execution.
   - The specified function is executed repeatedly, with the specified interval between each execution, until it is explicitly stopped.
   - It's commonly used for tasks that need to be executed at regular intervals, such as animations or updating data from a server.

Here's an example:

```javascript
let count = 0;
const intervalId = setInterval(() => {
  console.log("Interval execution:", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // Stop the interval after 5 executions
  }
}, 1000);
```

In the above code, the provided function is executed every 1 second (1000 milliseconds) due to the specified interval. The `count` variable keeps track of the number of executions, and the `if` condition stops the interval after 5 executions using `clearInterval`.

In summary, `setTimeout` is used to schedule the execution of a function after a specific delay, while `setInterval` is used to repeatedly execute a function at a fixed interval until explicitly stopped. Both functions are useful for introducing delays, scheduling tasks, or creating repeating actions in JavaScript. 

** Q.4 how can you handle Async code in JavaScript ? ** 
To handle asynchronous code in JavaScript, you can use various techniques and patterns to ensure proper execution and maintain code readability. Here are a few common approaches:

1. Callbacks:
   - Callbacks are a traditional way of handling asynchronous code in JavaScript.
   - You can pass a function (callback) as an argument to an asynchronous operation, and once the operation completes, the callback is invoked to handle the result.
   - Callbacks can be nested (callback hell) if multiple asynchronous operations are dependent on each other, leading to difficult-to-read code.
   - Example:

   ```javascript
   function fetchData(callback) {
     // Simulating asynchronous operation
     setTimeout(() => {
       const data = "Some data";
       callback(data);
     }, 2000);
   }

   fetchData((data) => {
     console.log(data);
   });
   ```

2. Promises:
   - Promises provide a more structured and intuitive way of handling asynchronous code.
   - A Promise represents a future value or the eventual completion or failure of an asynchronous operation.
   - Promises allow chaining using `then()` and `catch()` methods, making it easier to handle success and error scenarios.
   - Example:

   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       // Simulating asynchronous operation
       setTimeout(() => {
         const data = "Some data";
         resolve(data);
       }, 2000);
     });
   }

   fetchData()
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.log(error);
     });
   ```

3. Async/Await:
   - Async/await is a modern syntax introduced in ES2017 (ES8) that provides a more concise and synchronous-like way of handling asynchronous code.
   - It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and reason about.
   - Async functions return a Promise, and the `await` keyword is used to pause the execution until the Promise is resolved or rejected.
   - Example:

   ```javascript
   function fetchData() {
     return new Promise((resolve, reject) => {
       // Simulating asynchronous operation
       setTimeout(() => {
         const data = "Some data";
         resolve(data);
       }, 2000);
     });
   }

   async function fetchDataWrapper() {
     try {
       const data = await fetchData();
       console.log(data);
     } catch (error) {
       console.log(error);
     }
   }

   fetchDataWrapper();
   ```

These are just a few approaches for handling asynchronous code in JavaScript. Each has its own benefits and use cases. Promises and async/await are widely used and offer improved readability and maintainability compared to nested callbacks.

** Q.5 What are Callbacks &  Callback Hell ? **
Callbacks are functions that are passed as arguments to other functions and are executed once a specific task or operation is complete. They allow you to control the flow of asynchronous code and handle the result of an operation.

In simple terms, a callback is like leaving a note with specific instructions for someone, and they execute those instructions and inform you once they are done.

Callback Hell refers to a situation where you have multiple nested callbacks within your code, making it hard to read, understand, and maintain. It occurs when you have a chain of asynchronous operations that depend on each other, leading to deep indentation and convoluted code structure.

Here's an example to illustrate Callback Hell:

```javascript
asyncOperation1(function (result1) {
  // First asynchronous operation
  asyncOperation2(result1, function (result2) {
    // Second asynchronous operation
    asyncOperation3(result2, function (result3) {
      // Third asynchronous operation
      // ...
    });
  });
});
```

In the above code, each asynchronous operation relies on the result of the previous operation. This leads to nested callbacks, which makes the code difficult to follow and maintain. The more operations you have, the deeper the nesting becomes, hence the term "callback hell."

Callback Hell can make code harder to debug, read, and reason about. It can also make error handling and code organization more challenging. Asynchronous code tends to become more complex as the number of operations and dependencies increase.

To mitigate Callback Hell, there are alternative approaches like using Promises or async/await, which provide more structured and readable ways of handling asynchronous code. These approaches help flatten the code structure, improve readability, and make it easier to handle errors and control the flow of asynchronous operations.

 ** Q.6 What are Promises & Explain Some Three Methods of Promise **
 Promises are objects in JavaScript that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner and more structured way to handle asynchronous code compared to using callbacks.

Promises have three states:

1. Pending: The initial state of a Promise. It means the asynchronous operation is still ongoing, and the Promise is neither fulfilled nor rejected.

2. Fulfilled: The Promise is fulfilled when the asynchronous operation is successfully completed. It means the Promise has resolved with a value, and that value is available to be handled.

3. Rejected: The Promise is rejected if the asynchronous operation encounters an error or fails to complete. It means the Promise has a reason for rejection, such as an error message or an exception.

Promises provide three important methods to interact with and handle the outcome of asynchronous operations:

1. `then()`: The `then()` method is used to handle the fulfilled state of a Promise. It takes two optional callback functions as arguments: `onFulfilled` and `onRejected`. The `onFulfilled` callback is executed when the Promise is fulfilled, and it receives the resolved value as its argument. The `onRejected` callback is executed when the Promise is rejected, and it receives the reason for rejection as its argument.

```javascript
myPromise.then(
  (resolvedValue) => {
    // Handle the fulfilled state
  },
  (rejectionReason) => {
    // Handle the rejected state
  }
);
```

2. `catch()`: The `catch()` method is used to handle the rejected state of a Promise. It is a shorthand for using `then(null, onRejected)` and is specifically designed to handle only the rejected state. It takes a single callback function as an argument, which receives the reason for rejection.

```javascript
myPromise.catch((rejectionReason) => {
  // Handle the rejected state
});
```

3. `finally()`: The `finally()` method allows you to specify a callback function that will be executed regardless of the Promise's state, whether it is fulfilled or rejected. It is commonly used to perform cleanup or finalization tasks that need to be executed in either case.

```javascript
myPromise.finally(() => {
  // Execute regardless of the Promise's state
});
```

These three methods, `then()`, `catch()`, and `finally()`, provide ways to handle the outcome of Promises and perform different actions based on their states. They allow you to structure the flow of asynchronous code and handle success, failure, and cleanup tasks appropriately.

 ** Q.7 What’s async & await Keyword in JavaScript **
 The `async` and `await` keywords are part of the ES2017 (ES8) update to JavaScript. They provide a more concise and synchronous-like way to write and handle asynchronous code.

1. async:
   - The `async` keyword is used to declare an asynchronous function. It indicates that the function will perform asynchronous operations and will always return a Promise.
   - Inside an `async` function, you can use the `await` keyword to pause the execution and wait for a Promise to resolve before proceeding.
   - The `async` keyword eliminates the need for explicit Promise creation and chaining, making asynchronous code look more like regular synchronous code.

Example:

```javascript
async function fetchData() {
  // Asynchronous operation
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

In the above code, the `fetchData` function is declared as an `async` function. The `await` keyword is used to pause the execution until the Promise returned by `fetch()` resolves, and then the response is converted to JSON using `await response.json()`. The function returns the resulting data.

2. await:
   - The `await` keyword can only be used inside an `async` function. It is used to pause the execution of the function until a Promise is fulfilled or rejected.
   - When `await` is used with a Promise, it "waits" for the Promise to resolve, and then it returns the resolved value.
   - If the Promise is rejected, an error is thrown, which can be caught using a `try/catch` block or handled using a `catch()` method on the Promise.

Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
```

In the above code, `await` is used to pause the execution until the Promises returned by `fetch()` and `response.json()` resolve. If any error occurs during the execution, it is caught and logged to the console.

Using `async` and `await` simplifies the handling of Promises and makes asynchronous code more readable and structured, resembling synchronous code. It provides a more intuitive way to write and reason about asynchronous operations in JavaScript.
 */
