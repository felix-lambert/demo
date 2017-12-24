const arr = ['a', 'b', 'c'];

arr.push('d');

console.log(arr); // [ 'a', 'b', 'c', 'd' ]

console.log(arr.pop()); // d

console.log(arr); // [ 'a', 'b', 'c' ]

const arr2 = ['g', 'q'];

console.log(arr.concat(arr2)); // [ 'a', 'b', 'c', 'g', 'q' ]

console.log(arr.join('!')); // a!b!c

console.log(arr.reverse()); // [ 'c', 'b', 'a' ]

console.log(arr.shift()); // c
console.log(arr); // [ 'b', 'a' ]

arr.unshift('p'); 

console.log(arr); // [ 'p', 'b', 'a' ]

console.log(arr.slice(1, 2)); // [ 'b' ]

arr.push('i');
arr.push('f');
arr.sort(arr);
console.log(arr); // [ 'a', 'b', 'f', 'i', 'p' ]

console.log(arr.splice(2, 2, 'JS Nuggets')); // [ 'f', 'i' ]

console.log(arr); // [ 'a', 'b', 'JS Nuggets', 'p' ]
