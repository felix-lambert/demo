const inc = num => num + 1;
const dbl = num => num * 2;

const startValue = 2;

// This works, and there isn’t necessarily anything wrong with this approach,
// but it does require that you create an extra variable (plusOne).
// Admittedly, in this case, the extra variable isn’t a huge deal, but
// if you were following this approach for code with many steps, that
// would mean creating many variables. Many variables means coming up with
// meaningful names for them and, as we all know, naming things is hard.
const plusOne = inc(startValue); // 3
const result = dbl(plusOne); // 6

<<<<<<< HEAD
console.log(result); // 6
=======
console.log(result);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const newStartValue = 2;

// You could avoid the intermediate variables by nesting the function calls.
// Since plusOne is just holding the return value from inc(startValue), you
// can easily replace that variable directly with the function call. So the
// updated code would be:
const res = dbl(inc(newStartValue)); // 6

<<<<<<< HEAD
console.log(res); // 6
=======
console.log(res);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const _pipe = (f, g) => (...args) => g(f(...args));

const pipe = (...fns) => fns.reduce(_pipe);

// Compose
const compose = (...fns) => fns.reduceRight(_pipe);

// We can get the benefits of the nested functions in a more readable fashion
// by abstracting the nesting of the functions into a utility function that is
// commonly referred to as pipe.
// The goal of pipe is to end up replacing our code from above with something more 
// like this:
const incThenDbl = pipe(inc, dbl);
const rem = incThenDbl(2);

<<<<<<< HEAD
console.log(rem); // 6
=======
console.log(rem);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const add = (a, b) => a + b;
const dbled = num => num * 2;

const sumThenDbl = pipe(add, dbled);
const resu = sumThenDbl(2, 1); // 6

<<<<<<< HEAD
console.log(resu); // 6
=======
console.log(resu);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

const square = n => n * n;
const sumDblSquare = pipe(pipe(add, dbl), square);
const resul = sumDblSquare(2, 1); // 36

<<<<<<< HEAD
console.log(resul); // 36
=======
console.log(resul);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

// I could nest calls to pipe indefinitely, and eventually I could build up a 
// long pipeline, but the code is going to get harder and harder to follow. It 
// would be much nicer if we could just call pipe with all the functions we need 
// to call
const incDblSqr = pipe(inc, dbl, square);
const relult = incDblSqr(2);

<<<<<<< HEAD
console.log(relult); // 36
=======
console.log(relult);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43

// If you’d prefer to compose your functions from right to left, you can create a
// compose function by using reduceRight instead of reduce. This will start with
// the last function you pass in, and work it’s way to the left.
const inDblSqr = compose(inc, dbl, square);
const revult = inDblSqr(2);

<<<<<<< HEAD
console.log(revult); // 9
=======
console.log(revult);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
