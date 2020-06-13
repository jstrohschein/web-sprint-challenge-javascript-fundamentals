// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*The nested function is able to access 'internal' because, with closure, a function can look outside of its scope and use variables that are defined in a higher-order function. In this case, 'internal' was defined in 'myFunction' which is a parent to 'nestedFunction' so 'nestedFunction' can look outside it's scope and see that internal is defined within myFunction and execute the 'console.log' using 'internal' */


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

summation = (num) => {
  
  let x = 0;

  for (let i = 1; i <= num; i++){
    x += i;
  }

  return x;
  
};

console.log(summation(4));
