// 代码结构
/*
语句用分号分隔, 「自动分号插入」
在代码块 {...} 后以及有代码块的语法结构（例如循环）后不需要加分号：
alert('Hello'); alert('World');
*/

// 严格模式：完全启用现代 JavaScript 的所有特性
'use strict'; //该指令必须位于 JavaScript 脚本的顶部或函数体的开头。

// 变量
/*
可以使用以下方式声明变量：

let
const（不变的，不能被改变）
var（旧式的，稍后会看到）
一个变量名可以由以下组成：

字母和数字，但是第一个字符不能是数字。
字符 $ 和 _ 是允许的，用法同字母。
非拉丁字母和象形文字也是允许的，但通常不会使用。
变量是动态类型的，它们可以存储任何值：
*/

/*
8 种数据类型：

number — 可以是浮点数，也可以是整数，
bigint — 用于任意长度的整数，
string — 字符串类型，
boolean — 逻辑值：true/false，
null — 具有单个值 null 的类型，表示“空”或“不存在”，
undefined — 具有单个值 undefined 的类型，表示“未分配（未定义）”，
object 和 symbol — 对于复杂的数据结构和唯一标识符
*/

// 交互
// prompt(question[, default])
// 提出一个问题 question，并返回访问者输入的内容，如果他按下「取消」则返回 null。
// confirm(question)
// 提出一个问题 question，并建议用户在“确定”和“取消”之间进行选择。选择结果以 true/false 形式返回。
// alert(message)
// 输出一个消息 message。

// 运算符
/*
算数运算符
常规的：+ - * /（加减乘除），取余运算符 % 和幂运算符 **。

赋值

按位运算符

三元运算符

逻辑运算符

空值合并运算符

比较运算符

其他运算符
还有很少一部分其他运算符，如逗号运算符。
*/ 

// 循环
/*
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
指令 break/continue 允许退出整个循环/当前迭代。使用标签来打破嵌套循环。
*/ 

// “switch” 语句
/*
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // prompt 的结果是一个字符串，而不是数字
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
*/

// 函数
/*
函数声明
函数表达式
箭头函数
*/ 
