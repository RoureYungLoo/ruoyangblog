// let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => a + b;
// let sum = function (a, b) {
//     return a + b;
// }
console.log(sum(1, 2))

let double = n => n * 2;
// 差不多等同于：let double = function(n) { return n * 2 }
let sayHi = () => console.log("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => console.log('Hello!') :
    () => console.log("Greetings!");
welcome();

// 多行箭头函数
let sum1 = (a, b) => {
    let result = a + b
    return result
}
console.log(sum1(2, 3))

// 不带花括号：(...args) => expression —— 右侧是一个表达式, 自动return
// 带花括号：(...args) => { body }，手动return
