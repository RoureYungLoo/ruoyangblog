// 值的比较 > >= < <= !=
console.log(2 > 1)
console.log(2 == 1)
console.log(2 != 1)

let ret = 5 >= 4
console.log(ret)

// 字符串比较，Unicode编码顺序
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

// 不同类型间的比较。当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。

console.log( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
console.log( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
console.log(true == 1)
console.log(false == 0)

// 严格相等，===，严格不相等!==
console.log( 0 == false ); // true
console.log( '' == false ); // true
console.log( 0 === false ); // false，因为被比较值的数据类型不同
console.log( 0 !== false ); // true，因为被比较值的数据类型不同

// 对 null 和 undefined 进行比较
console.log( null === undefined ); // false
console.log( null == undefined ); // true

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
// 除非你非常清楚自己在做什么，否则永远不要使用 >= > < <= 去比较一个可能为 null/undefined 的变量。
// 对于取值可能是 null/undefined 的变量，请按需要【分别检查它的取值情况】
