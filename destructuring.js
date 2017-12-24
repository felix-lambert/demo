const animals = {
  species: 'dog',
  weight: 23,
  sound: 'woof',
};

makeSound({
  weight: 23,
  sound: 'woof',
});

function makeSound({ species = 'animal', sound }) {
  console.log('The ' + species + ' says ' + sound + '!'); // The animal says woof!
}

const head = ([x]) => x;

console.log(head([1, 2, 3]) === 1); // true

const name = 'Will';

const obj = {
  ['name' + name]: 'some value',
};

console.log(obj) // { nameWill: 'some value' }