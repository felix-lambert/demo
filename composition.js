<<<<<<< HEAD
// Function composition is a mathematical concept that allows you to combine 
// two or more functions into a new function.
// Function composition requires you to write your functions in a composable way. 
// This means your functions must have 1 input and 1 output. Functions with multiple 
// inputs must be curried.

// composition is designing your types with what they do
// inheritance is designing your types with what they are
const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name), // Woof, I am karp
=======
// composition is designing your types with what they do
// inheritance is designing your types with what they are
const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name),
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
});

const driver = state => ({
  drive: () => (state.position += state.speed),
});

barker({ name: 'karp' }).bark();
// Woof, I am karo

const murderRobotDog = name => {
  const state = {
    name,
    speed: 100,
    position: 0,
  };
  return Object.assign({}, barker(state), driver(state));
};

<<<<<<< HEAD
=======
console.log(murderRobotDog);

const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data);

// Function composition is a mathematical concept that allows you to combine 
// two or more functions into a new function.
// Function composition requires you to write your functions in a composable way. 
// This means your functions must have 1 input and 1 output. Functions with multiple 
// inputs must be curried.
const add = x => y => x + y;
const multiply = x => y => x * y;
const add2Multiply3 = compose(multiply(3), add(2));

console.log(add2Multiply3);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
