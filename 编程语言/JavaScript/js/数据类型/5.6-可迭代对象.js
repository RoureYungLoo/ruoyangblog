// 可迭代对象：指可以被遍历的对象。是说任何对象都可以被定制为可在 for..of 循环中使用的对象。  迭代：对元素一个一个进行操作。
// 迭代器是一个对象，它有一个 next() 方法，可以返回下一个元素的值和状态
// JavaScript中的数组、字符串

// Symbol.iterator
let range = {
    from: 1,
    to: 5
}

// 1. for..of 调用首先会调用这个
range[Symbol.iterator] = function () {
    // ……它返回迭代器对象（iterator object）：

    // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
    let iterator = {
        current: this.from,
        last: this.to,
        // 3. next() 在 for..of 的每一轮循环迭代中被调用
        // next: function() {
        //     if (this.current <= this.last) {
        //         // 4. 它将会返回 {done:.., value :...} 格式的对象
        //         return {
        //             done: false,
        //             value: this.current++
        //         }
        //     } else {
        //         return {
        //             done: true
        //         }
        //     }
        // }
    }
    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    iterator.next = function () {
        if (this.current <= this.last) {
            // 4. 它将会返回 {done:.., value :...} 格式的对象
            return {
                done: false,
                value: this.current++
            }
        } else {
            return {
                done: true
            }
        }
    }
    return iterator // 返回迭代器对象 iterator
}

for (const item of range) {
    console.log(item)
}

range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;  // 返回 range 对象本身，使其自身作为迭代器来简化代码, 缺点：不能在range对象上运行2个及以上for of 循环 
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num); // 1, 然后是 2, 3, 4, 5
}

// 无穷迭代器

/* 字符串是可迭代的 */
for (let char of "test") {
    // 触发 4 次，每个字符一次
    console.log(char); // t, e, s, t
}
/* 代理对儿，UTF-16扩展字符*/
let str = '𝒳😂';
for (let char of str) {
    console.log(char); // 𝒳，然后是 😂
}

/* 显式调用迭代器 */
str = "Hello";
// 和 for..of 做相同的事
// for (let char of str) alert(char);
// 创建迭代器对象
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // 一个接一个地输出字符
}

/* 可迭代（iterable）和类数组（array-like） */
/* 
Iterable 是指实现了 Symbol.iterator 方法的对象。
Array-like 是指有索引 index 和长度 length 属性的对象，所以它们看起来很像数组。
二者之间没有必然的关联关系！！
可迭代对象和类数组对象通常都 【不是数组】，它们没有 push 和 pop 等方法
*/
let arrayLike = { // 有索引和 length 属性 => 类数组对象
    0: "Hello",
    1: "World",
    length: 2
};
// Error (no Symbol.iterator)
// for (let item of arrayLike) { }

/* Array.from 接收 interable 或 array-like，返回一个array */
let arr = Array.from(arrayLike);
console.log(arr.pop()); // World（pop 方法有效）
array_range = Array.from(range)
console.log(array_range.toString())
// Array.from(obj[, mapFn, thisArg]) 
arr = Array.from(range, num => num * num * num)
console.log(arr)

str = '𝒳😂';
// 将 str 拆分为字符数组
let chars = Array.from(str);
console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

chars = []
for (const char of str) {
    chars.push(char)
}
console.log(chars)

// 自定义slice方法
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}
str = '𝒳😂𩷶';
console.log(slice(str, 1, 3)); // 😂𩷶
// 原生方不支持识别代理对（译注：UTF-16 扩展字符）
console.log(str.slice(1, 3)); // 乱码（两个不同 UTF-16 扩展字符碎片拼接的结果）

/* 
应用 for..of 的对象被称为 可迭代的。
1. 可迭代对象必须实现 Symbol.iterator 方法。
2. obj[Symbol.iterator]() 的结果被称为 迭代器（iterator）。由它处理进一步的迭代过程。
3. 一个迭代器必须有 next() 方法，它返回一个 {done: Boolean, value: any} 对象，这里 done:true 表明迭代结束，否则 value 就是下一个值。

有索引属性和 length 属性的对象被称为 类数组对象
Array.from(obj[, mapFn, thisArg]) 将可迭代对象或类数组对象 obj 转化为真正的数组 Array
*/
