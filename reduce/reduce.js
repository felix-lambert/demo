const fs = require('fs');

const sum = [1, 2, 3].reduce(function(result, item) {
  return result + item;
}, 0);

<<<<<<< HEAD
console.log(sum); // 6
=======
console.log(sum);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

// reduce is the multi tool of list transformations
const orders = [{ amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 }];

<<<<<<< HEAD
=======
// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount;
// }

>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
// 0 is the starting point for our sum
// The second argument is the iterated item
const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

<<<<<<< HEAD
console.log('total amount ' + totalAmount); // 1075
=======
console.log('total amount ' + totalAmount);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

// 'split' splits a string into an array
const output = fs
  .readFileSync('./data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3],
    });
    return customers;
  }, {});

console.log('output', JSON.stringify(output, null, 2));

const expenses = [
  {
    name: 'Rent',
    price: 500,
    type: 'Household',
  },
  {
    name: 'Netflix',
    price: 5.99,
    type: 'Services',
  },
  {
    name: 'Gym',
    price: 15,
    type: 'Health',
  },
  {
    name: 'Bills',
    price: 100,
    type: 'Household',
  },
];

const sumAll = expenses.map(item => item.price).reduce((acc, price) => acc + price, 0);

<<<<<<< HEAD
console.log(sumAll); // 620.99
=======
console.log(sumAll);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const votes = [
  'angular',
  'angular',
  'react',
  'react',
  'react',
  'angular',
  'ember',
  'react',
  'vanilla',
];

const initialValue = {};

const reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
};

const result = votes.reduce(reducer, initialValue);

<<<<<<< HEAD
console.log(result); // { angular: 3, react: 4, ember: 1, vanilla: 1 }
=======
console.log(result);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const data = [1, 2, 3];

const doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);

  return acc;
}, []);

<<<<<<< HEAD
console.log('my doubled data ' + doubled); // 2,4,6
=======
console.log('my doubled data ' + doubled);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const doubledMapped = data.map(function(item) {
  return item * 2;
});

<<<<<<< HEAD
console.log('my doubled mapped ' + doubledMapped); // 2,4,6
=======
console.log('my doubled mapped ' + doubledMapped);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const data2 = [1, 2, 3, 4, 5, 6];

// You can use a filter and a map but this is faster when you have a lot of items
const evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

<<<<<<< HEAD
console.log(evens); // [ 2, 4, 6 ]
=======
console.log(evens);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

// Use the optionnal reduce argument
const reducerOption = (accumulator, value, index, array) => {
  const intermediaryValue = accumulator + value;

  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }

  return accumulator + value;
};

const dataInOption = [1, 2, 3, 3, 4, 5, 3, 1];

const sum2 = dataInOption.reduce(reducerOption, 0);

<<<<<<< HEAD
console.log(sum2); // 2.75
=======
console.log(sum2);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const data3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flattenedData = data3.reduce(function(acc, value) {
  return acc.concat(value);
}, []);

<<<<<<< HEAD
console.log(flattenedData) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

=======
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
const input = [
  {
    title: 'Batman Begins',
    year: 2005,
    cast: [
      'Christian Bale',
      'Michael Caine',
      'Liam Neeson',
      'Katie Holmes',
      'Gary Oldman',
      'Cillian Murphy',
    ],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    cast: [
      'Christian Bale',
      'Heath Ledger',
      'Aaron Eckhart',
      'Michael Caine',
      'Maggie Gyllenhal',
      'Gary Oldman',
      'Morgan Freeman',
    ],
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    cast: [
      'Christian Bale',
      'Gary Oldman',
      'Tom Hardy',
      'Joseph Gordon-Levitt',
      'Anne Hathaway',
      'Marion Cotillard',
      'Morgan Freeman',
      'Michael Caine',
    ],
  },
];

const stars = input.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);

console.log(stars);

const data4 = [1, 2, 3, 4, '5'];
const sum3 = data4.reduceRight(function(acc, value, index) {
  console.log(`Index: ${index}`);
  return acc + value;
}, 0);

<<<<<<< HEAD
console.log('Sum: ', sum3); // 054321
=======
console.log('Sum: ', sum3);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

function increment(input) {
  return input + 1;
}

function decrement(input) {
  return input - 1;
}

function double(input) {
  return input * 2;
}

function halve(input) {
  return input / 2;
}

const initial_value = 1;
const pipeline = [increment, double, decrement];

const final_value = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initial_value);

console.log('final value');
<<<<<<< HEAD
console.log(final_value); // 3
=======
console.log(final_value);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
