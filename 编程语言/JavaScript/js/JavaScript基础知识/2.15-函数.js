// 函数声明
/*
function 函数名(形参列表){
    // 函数体
}
*/
function showMessage() {
    console.log('Hello everyone!');
}
showMessage();
showMessage();

// 局部变量
function showMessage2() {
    let message = "Hello, I'm JavaScript!"; // 局部变量
    console.log(message);
}
showMessage2(); // Hello, I'm JavaScript!
//   console.log( message ); // <-- 错误！变量是函数的局部变量

// 外部变量
let userName = 'John';
function showMessage3() {
    let message = 'Hello, ' + userName;
    console.log(message);
}
showMessage3(); // Hello, John

// 修改函数外部变量
let userName2 = 'John';
function showMessage4() {
    userName2 = "Bob"; // (1) 改变外部变量
    let message = 'Hello, ' + userName2;
    console.log(message);
}

console.log(userName2); // John 在函数调用之前
showMessage4();
console.log(userName2); // Bob，值被函数修改了

// 访问就近原则：在函数内部声明了同名变量，那么函数会 遮蔽 外部变量
let userName5 = 'John';
function showMessage5() {
    let userName5 = "Bob"; // 声明一个局部变量
    let message = 'Hello, ' + userName5; // Bob
    console.log(message);
}
// 函数会创建并使用它自己的 userName5
showMessage5();
console.log(userName5); // John，未被更改，函数没有访问外部变量

// 全局变量：任何函数之外声明的变量
// 全局变量在任意函数中都是可见的（除非被局部变量遮蔽）
// 减少全局变量的使用是一种很好的做法。现代的代码有很少甚至没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。

// 参数
function showMessage6(from, text) { // 参数：from 和 text
    console.log(from + ': ' + text);
}
showMessage6('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage6('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage7(from, text) {
    from = '*' + from + '*'; // 让 "from" 看起来更优雅
    console.log(from + ': ' + text);
}
let from = "Ann";
showMessage7(from, "Hello"); // *Ann*: Hello
// "from" 值相同，函数修改了一个局部的副本。
console.log(from); // Ann

// 默认值参数
function showMessage8(from, text = "no text given") {
    console.log(from + ": " + text);
}
showMessage8("Ann"); // Ann: no text given


function func1() {
    return "ret func1"
}
function showMessage9(from, text = func1()) {
    console.log(from + ": " + text);
}
showMessage9("Ann"); // Ann: no text given

//  旧代码中的默认参数
function func2(from, text) {
    //方式一
    if (text === undefined) {
        text = 'default value'
    }

    // 方式二
    text = text || 'default value'

    // ...
}

// 后备默认参数
function showMessage10(text) {
    // ...
    if (text === undefined) { // 如果参数未被传递进来
        text = 'empty message';
    }
    // 如果 text 为 undefined 或者为假值，那么将其赋值为 'empty'
    text = text || 'empty';
    console.log(text);
}
showMessage10(); // empty message

function showCount(count) {
    // 如果 count 为 undefined 或 null，则提示 "unknown"
    console.log(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// 返回值
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result); // 3

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Got a permission from the parents?');
    }
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// 空值的 return 或没有 return 的函数返回值为 undefined
function func3(params) { }
function func4(params) { return }
console.log(func3())
console.log(func4())

// 不要在 return 与返回值之间添加新行
return
(some + long + expression + or + whatever * f(a) + f(b)) //错误的return

return;
(some + long + expression + or + whatever * f(a) + f(b)) //错误的return

return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
) //正确的return

// 函数命名 简短且尽可能准确地描述函数的作用
// 示例
// showMessage()     // 显示信息
// getAge()          // 返回 age（gets it somehow）
// calcSum()         // 计算求和并返回结果
// createForm()      // 创建表单（通常会返回它）
// checkPermission() // 检查权限并返回 true/false

// 一个函数 —— 一个行为；一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。

// 函数即注释  函数应该简短且只有一个功能。如果这个函数功能复杂，那么把该函数拆分成几个小的函数是值得的
// 自描述代码
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);  // 一个素数
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
