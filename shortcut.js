// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy

let myVar = 6;
// check my truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(myMoney){

}

const money = 800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit'
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink =  (money  > 100 && myVar > 100) ? 'coke' : 'filter winter';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);

const myStr = num1 + '';
// console.log(myStr);

// string to number

const input = '535';
const inputNumber = +input;
// console.log(inputNumber);

let isActive = true;
const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser()
//use && if the left side is true then right side will be executed

isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle Boolean
isActive = !isActive