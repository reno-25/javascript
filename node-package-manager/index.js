const _ = require('lodash');
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);

// Output: [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
// This code uses lodash to partition an array into odd and even numbers.
