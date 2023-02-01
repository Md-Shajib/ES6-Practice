function add(num1, num2 = 20){
    // if(num2 == undefined){
    //     num2 = 0;
    // } or
    // num2 = num2 || 10; or we can assign in parameter as default value
    return num1 + num2;
}
const total = add(15, 5);
console.log(total);