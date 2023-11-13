// 现代JS中数字类型有2种：双精度浮点数和任意长度的整数BigInt

// 10亿
let billion1 = 1000000000;
let billion2 = 1_000_000_000;
let billion3 = 1e9;

// 百万分之一
let mcs1 = 0.000001
let mcs2 = 1e-6;

console.log(1e-3 === 1 / 1000)
console.log(1.23e-6 === 1.23 / 1000000)
console.log(1234e-2 === 1234 / 100)


let a = 0b11111111;  // 二进制
let b = 0o377;  // 八进制
console.log(a == b)

// 十六进制
console.log(0xff)
console.log(0xff)
console.log(0xFF == 0xff)

// toString(base) 返回base进制的字符串表示,base 的范围可以从 2 到 36。默认情况下是 10。

let num = 255
let bignum = 12345678
console.log(num.toString(2)) // 11111111
console.log(num.toString(8)) // 377
console.log(num.toString(16)) //ff
console.log(bignum.toString(32)) // booae
console.log(123456789..toString(32)) // 3lnj8l, 注意2个点

// 取整：向上，向下，就近(四舍五入)，丢弃(截断)
let PI = 3.1415926;
console.log(Math.ceil(PI))
console.log(Math.floor(PI))
console.log(Math.round(PI))
console.log(Math.trunc(PI))

// 保留小数点后3位
console.log(Math.round(PI * 1000) / 1000)
console.log(PI.toFixed(3))
console.log(PI.toFixed(9))
console.log(+PI.toFixed(8))

// 不精确的计算
console.log(1e500)
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 == 0.3)
console.log(0.1.toFixed(20))

let ratio = 0.1 + 0.2
console.log(ratio.toFixed(2))
console.log(+ratio.toFixed(2))

console.log(9999999999999999)
console.log(0 == -0)

// isFinite 和 isNaN
// isNaN(value) 将其参数转换为数字，然后测试它是否为 NaN
console.log(isNaN(NaN))
console.log(isNaN("str"))
console.log(NaN === NaN)

// isFinite(value) 将其参数转换为数字，如果是常规数字而不是 NaN/Infinity/-Infinity，则返回 true
console.log(isFinite("15"))
console.log(isFinite("str"))
console.log(isFinite(Infinity))

// 在所有数字函数中，包括 isFinite，空字符串或仅有空格的字符串均被视为 0。

// Object.is()
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(0, -0)) //false
// 其他情况下：object.is(a,b) 等同于 a === b

// parseInt parseFloat 解析数字
// 严格数字转换：+ 或者 Number()
console.log(+"100px") //NaN
console.log(parseInt("100px"))
console.log(parseFloat("12.5em"))
console.log(parseInt("192.168.1.1"))
console.log(parseFloat("192.168.1.1"))
console.log(parseInt("no.1"))
// 指定数字进制数
console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255，没有 0x 仍然有效
console.log(parseInt('2n9c', 36)); // 123456

// 其他数学函数: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math.random()
Math.max()
Math.min()
Math.pow()
