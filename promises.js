// Promises are composable
// Promises are alternatives to callback
// Promise is a design pattern
// You have Q bluebird, but you also a native way of making promises in javascript

const promiseToCleanTheRoom = new Promise((resolve, reject) => {
  // cleaning the room
  const isClean = true;

  if (isClean) {
    resolve('clean');
  } else {
    reject('not Clean');
  }
});

promiseToCleanTheRoom
  .then(fromResolve => {
<<<<<<< HEAD
    console.log('the room is ' + fromResolve); // the room is clean
=======
    console.log('the room is ' + fromResolve);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
  })
  .catch(fromReject => {
    console.log('the room is ' + fromReject);
  });

const myPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve('Good to go!');
  }, 1000);
});

myPromise
  .then(res => {
<<<<<<< HEAD
    console.log(res); // Good to go!
=======
    console.log(res);
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
  })
  .catch(err => {
    console.log(err);
  });

const myPromise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promise 2');
  }, 1500);
});

<<<<<<< HEAD
// [ 'Good to go!', 'Promise 2' ]
Promise.all([myPromise, myPromise2]).then(data => console.log(data)); 
=======
Promise.all([myPromise, myPromise2]).then(data => console.log(data));
>>>>>>> 607d3c9f0c3dba3f02facb70b9ae23187fd7cb43
