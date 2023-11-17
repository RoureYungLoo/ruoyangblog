// 字符串转换
let value = true;
console.log(typeof value)

value = String(value)
console.log(typeof value)

// 数字型转换
console.log("6"/"2")

let str = "123";
console.log(typeof str); // string

let num = Number(str); // 变成 number 类型 123
console.log(typeof num); // number

let age = Number("a");
console.log(age); // NaN，转换失败

// 转换规则:
// 值	        变成……
// undefined	NaN
// null	        0
// true 和 false	1 and 0
// string	    去掉首尾空白字符（空格、换行符 \n、制表符 \t 等）后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 0。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 NaN。
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

// 布尔型转换
// 直观上为“空”的值（如 0、空字符串、null、undefined 和 NaN）将变为 false。
// 其他值变成 true。
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false
console.log( Boolean("0") ); // false
// 包含 0 的字符串 "0" 是 true
