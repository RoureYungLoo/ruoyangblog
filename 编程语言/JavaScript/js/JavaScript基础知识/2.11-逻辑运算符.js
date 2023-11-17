// 与 或 非 空值合并 !!
// 真值表
// 逻辑或 （加）
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

if (1 || 0) {
    console.log("true")
}

let hour = 9;
if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}

let hour1 = 12;
let isWeekend = true;
if (hour1 < 10 || hour1 > 18 || isWeekend) {
    console.log('The office is closed.'); // 是周末
}

// 或运算特殊用法1：寻找第一个真值
console.log(1 || 0); // 1（1 是真值）
console.log(null || 1); // 1（1 是第一个真值）
console.log(null || 0 || 1); // 1（第一个真值）
console.log(undefined || null || 0); // 0（都是假值，返回最后一个值）
let firstName = "";
let lastName = "";
// let nickName = "SuperCoder";
let nickName = "";
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder

// 或运算特殊用法2：短路求值
true || console.log("not printed");
false || console.log("printed");

// 逻辑与 (乘)
console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
    console.log('Time is 12:30');
}
if (1 && 0) { // 作为 true && false 来执行
    console.log("won't work, because the result is falsy");
}

// 与运算特殊用法：寻找第一个假值
// 如果第一个操作数是真值，
// 与运算返回第二个操作数：
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// 如果第一个操作数是假值，
// 与运算将直接返回它。第二个操作数会被忽略
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

console.log(1 && 2 && null && 3); // null
console.log(1 && 2 && 3); // 3，最后一个值

// 与运算 && 的优先级比或运算 || 要高。

// 非
console.log(!true) //false
console.log(!0) //false
console.log(!!"non-empty string") //true
console.log(!!null) //false
console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false
