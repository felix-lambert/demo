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
  console.log('The ' + species + ' says ' + sound + '!');
}

const head = ([x]) => x;

console.log(head([1, 2, 3]) === 1);

Promise.all([promise1, promise2]).then(([results1, results2]) => {});

const name = 'Will';

const obj = {
  ['name' + name]: 'some value',
};

function calcBmi({ weight: w, height: h, max = 25, callback }) {
  const bmi = w / Math.pow(h, 2);
  if (bmi > max) {
    console.log("You're overweight");
  }
  if (callback) {
    callback(bmi);
  }
}

calcBmi({
  weight,
  height,
  max: 25,
});

calcBmi({
  weight,
  height,
  callback() {},
});
