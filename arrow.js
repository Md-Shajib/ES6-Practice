// function doubleIt(num){
//     return num * 2;
// } or 

// const doubleIt = function(num){ //function expression
//     return num * 2;
// } or

const get10 = () => 10; // arrow function before arrow is parameter and after arrow is return part (0 parameter)
const doubleIt = num => num *2; //1 parameter
const add = (num1, num2) => num1 + num2;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const differ = num1 - num2;
    const multi = sum * differ;
    return multi;
}

const number = add(10, 20);
console.log(number);

const math = doMath(5, 7);
console.log(math);