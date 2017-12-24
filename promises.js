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
    console.log('the room is ' + fromResolve);
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
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

const myPromise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promise 2');
  }, 1500);
});

Promise.all([myPromise, myPromise2]).then(data => console.log(data));
