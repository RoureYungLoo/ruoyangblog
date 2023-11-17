// 当一个值既不是 null 也不是 undefined 时，我们将其称为“已定义的（defined）”。
// a ?? b ,  a是undefined时，结果是b；a是defined时，结果为a
let user  //undefined
console.log(user ?? "1")
console.log(user)

// let user1;
let user1="John";
console.log(user1 ?? "匿名"); // 匿名（user 未定义）

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// 显示第一个已定义的值：
console.log(firstName ?? lastName ?? nickName ?? "匿名"); // Supercoder

// "||" VS "??"
// || 返回第一个 真 值。
// ?? 返回第一个 已定义的 值。
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// ?? 优先级
let height1 = null;
let width1 = null;

// 重要：使用括号
let area = (height1 ?? 100) * (width1 ?? 50);
console.log(area); // 5000

// ?? 与 && 或 || 一起使用
// let x1 = 1 && 2 ?? 3; // Syntax error
let x2 = (1 && 2) ?? 3; // 正常工作了

// console.log(x1); // 2
console.log(x2); // 2
