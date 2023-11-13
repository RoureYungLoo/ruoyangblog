// 原始类型（基础数据类型）： string，number，bigint，boolean，symbol，null，undefined
// 对象：1，多个键值对；2，可以使用大括号{}；3，函数也是对象
let john = {
    name: "John",
    sayHi: function(){
        console.log("Hi,I'm John.")
        console.log("Hi,I'm John.".toUpperCase()) /*当作对象的原始类型*/
    }
}
john.sayHi()

// 内置对象：日期，错误，HTML，．．．(可以理解为官方库)

/* 当作对象的原始类型 */
// 对象包装器 String，Number，Boolean，Symbol，Bigint，把原始类型看作对象类型，调用它们的方法和属性
let n =1.23456
console.log(n.toFixed(3))


// 构造器 String/Number/Boolean 仅供内部使用
// 特殊的原始类型 null 和 undefined 是例外。它们没有对应的“对象包装器”，也没有提供任何方法。从某种意义上说，它们是“最原始的”。
