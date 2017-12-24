// Functions are closures
// closures are functions that are defined outside the variable
// It is nothing more than accessing a variable outside of a function s scope

// Closures are useful because they let you associate some
// data (the lexical environment) with a function that operates on that data.

// global variables makes your code very fragile so we need to avoid global scopes

// In any languages, either you pass some functions, or you define some values
const me = 'Bruce Wayne';

function greetMe() {
  console.log('Hello, ' + me + '!');
}

greetMe();

function makeAdder(x) {
  return y => x + y;
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function foo(x) {
  function bar(y) {
    console.log(x + y);
  }
  bar(2);
}

foo(2);

const counter = (() => {
  // This is a private method
  let privateCounter = 0;

  const changeBy = val => {
    privateCounter += val;
  };

  // This is kind of public methods
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value: () => privateCounter,
  };
  // The two parenthesis are going to execute that function
})();

console.log('check closures with counter');
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
