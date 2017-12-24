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
<<<<<<< HEAD
  console.log('The ' + species + ' says ' + sound + '!'); // The animal says woof!
=======
  console.log('The ' + species + ' says ' + sound + '!');
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
}

const head = ([x]) => x;

<<<<<<< HEAD
console.log(head([1, 2, 3]) === 1); // true
=======
console.log(head([1, 2, 3]) === 1);

Promise.all([promise1, promise2]).then(([results1, results2]) => {});
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const name = 'Will';

const obj = {
  ['name' + name]: 'some value',
};

<<<<<<< HEAD
console.log(obj) // { nameWill: 'some value' }
=======
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
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
