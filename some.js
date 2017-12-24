const hasNegativeNumber = [1, 2, 3, -1, 4].some(function (item) {
  return item < 0;
});

console.log(hasNegativeNumber); // true
