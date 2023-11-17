// 8种, 7种原始类型, 1种引用类型
// 动态类型编程语言

// Number
let n1 = 123;
let n2 = Infinity;
let n3 = -Infinity;
let n4 = NaN;
console.log(1 / 0);
console.log(-Infinity);
console.log("string" / 2);
console.log(NaN ** 0);
console.log(NaN * 0);
console.log(NaN + 2);

// BigInt
let ceil = 9007199254740991
console.log(ceil + 1)
console.log(ceil + 2)
console.log(ceil + 3)
console.log(ceil + 4)

const bigInt = 9007199254740991n
console.log(bigInt + 1n)
console.log(bigInt + 2n)
console.log(bigInt + 3n)

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase)

// Boolean
let gender = true
console.log(1 > 2)
console.log(gender)

// null
let age = null //值是未知的
console.log(age)
console.log(age == "")
console.log(age == {})
console.log(age == [])

// undefined 
let name //已声明未初始化
console.log(name)

// Object和Symbol
let stu = {
    name: 'stu',
    age: 25
}
console.log(stu)
console.log(typeof stu)

// typeof
console.log(typeof undefined)   // "undefined"
console.log(typeof 0)           // "number"
console.log(typeof 10n)         // "bigint"
console.log(typeof true)        // "boolean"
console.log(typeof "foo")       // "string"
console.log(typeof Symbol("id")) // "symbol"
console.log(typeof Math)    // "object"  (1)
console.log(typeof null)    // "object"  (2)
console.log(typeof alert)   // "function"  (3
