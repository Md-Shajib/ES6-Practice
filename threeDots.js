const ages = [12,13,14,15];
const ages2 = [18,19,20,23];
const ages3 = [31,32,43,54,67];

//const allAges = ages.concat(ages2).concat([5]).concat(ages3);

allAges = [...ages, ...ages2, 5, ...ages3] //string concatination with spread operator
console.log(allAges);

const maxAge = Math.max(...allAges);
console.log(`The senior age is ${maxAge}`);