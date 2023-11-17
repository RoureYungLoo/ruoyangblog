// 函数声明
function sayHi1() {
    console.log("Hello");
}

// 函数表达式  末尾有一个分号
let sayHi2 = function () {
    console.log("Hello");
};
console.log(sayHi1)

function sayHi() {   // (1) 创建
    console.log("Hello");
}
let func = sayHi;    // (2) 复制
func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}
function show_ok() {
    console.log("OK")
}
function show_cancel() {
    console.log("Cancel")
}
ask("你赞成吗？", show_ok, show_cancel)

function ask2(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask2(
    "Do you agree?",
    function () { console.log("You agreed."); }, //匿名函数
    function () { console.log("You canceled the execution."); } //匿名函数
);

// 函数表达式 vs 函数声明
// 函数声明
function sum(a, b) {
    return a + b;
}

// 函数表达式
let sum1 = function (a, b) {
    return a + b;
};

// 函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。
// 一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

func1("tom")

function func1(person) {
    console.log("hello ", person)
}

// sayHi5("John"); // error!
// let sayHi5 = function (name) {  // (*) no magic any more
//     alert(`Hello, ${name}`);
// };

// 严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。

let age = prompt("What is your age?", 18);
// 有条件地声明一个函数
if (age < 18) {
    function welcome() {
        alert("Hello!");
    }
} else {
    function welcome() {
        alert("Greetings!");
    }

}
// ……稍后使用
// welcome(); // Error: welcome is not defined

let age2 = 16; // 拿 16 作为例子
if (age2 < 18) {
    welcome2();               // \   (运行)
    function welcome2() {     //  |
        alert("Hello!");       //  |  函数声明在声明它的代码块内任意位置都可用
    }                        //  |
    welcome2();               // /   (运行)
} else {
    function welcome2() {
        alert("Greetings!");
    }
}
// 在这里，我们在花括号外部调用函数，我们看不到它们内部的函数声明。
// welcome2(); // Error: welcome is not defined

let age3 = prompt("What is your age?", 18);
let welcome;
if (age3 < 18) {
    welcome3 = function () {
        alert("Hello!");
    };
} else {
    welcome3 = function () {
        alert("Greetings!");
    };
}
welcome3(); // 现在可以了

let age4 = prompt("What is your age?", 18);
let welcome4 = (age4 < 18) ?
    function () { alert("Hello!"); } :
    function () { alert("Greetings!"); };
welcome4(); // 现在可以了
