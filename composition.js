// Function composition is a mathematical concept that allows you to combine 
// two or more functions into a new function.
// Function composition requires you to write your functions in a composable way. 
// This means your functions must have 1 input and 1 output. Functions with multiple 
// inputs must be curried.

// composition is designing your types with what they do
// inheritance is designing your types with what they are
const barker = state => ({
  bark: () => console.log('Woof, I am ' + state.name), // Woof, I am karp
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

