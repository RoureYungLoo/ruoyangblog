// 数组常用方法

/* 添加/移除数组元素:
arr.push(...items) —— 从尾端添加元素，
arr.pop() —— 从尾端提取元素，
arr.shift() —— 从首端提取元素，
arr.unshift(...items) —— 从首端添加元素。
*/

// splice 处理JS数组[添加]\[修改]\[删除]
// 从索引 start 开始修改 arr：删除 deleteCount 个元素并在当前位置插入 elem1, ..., elemN。
// 最后返回被删除的元素所组成的数组。
// arr.splice(start[, deleteCount, elem1, ..., elemN])
arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // 从索引 1 开始删除 1 个元素
console.log(arr); // ["I", "JavaScript"]

arr = ["I", "study", "JavaScript", "right", "now"];
// 删除数组的前三项，并使用其他内容代替它们
let del = arr.splice(0, 3, "Let's", "dance");
console.log(arr) // 现在 ["Let's", "dance", "right", "now"]
console.log(del)

arr = ["I", "study", "JavaScript"];
// 从索引 2 开始
// 删除 0 个元素
// 然后插入 "complex" 和 "language"
arr.splice(2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript"

arr = [1, 2, 5];
// 从索引 -1（尾端前一位）
// 删除 0 个元素，
// 然后插入 3 和 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

/* slice [start, end)*/
arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // e,s（复制从位置 1 到位置 3 的元素）
console.log(arr.slice(-2)); // s,t（复制从位置 -2 到尾端的元素）
console.log(arr.slice()) //copy 一个数组
let test = arr.slice()
console.log(arr === test) // false

/* concat */
arr = [1, 2];
// 从 arr 和 [3,4] 创建一个新数组
console.log(arr.concat([3, 4])); // 1,2,3,4
// 从 arr、[3,4] 和 [5,6] 创建一个新数组
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// 从 arr、[3,4]、5 和 6 创建一个新数组
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

arr = [1, 2];
let arrayLike = {
    0: "something",
    length: 1,
    // [Symbol.isConcatSpreadable]: true,
};
console.log(arr.concat(arrayLike)); // 1,2,[object Object]

// 遍历: forEach, 为数组的每个元素都运行一个函数。
// 对每个元素调用 alert
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// 在数组中搜索 arr.indexOf, arr.lastIndexOf arr.includes()
// 这三个均使用严格相等 === 进行比较
arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

let fruits = ['Apple', 'Orange', 'Apple'];
console.log(fruits.indexOf('Apple')); // 0（第一个 Apple）
console.log(fruits.lastIndexOf('Apple')); // 2（最后一个 Apple）

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1（错，应该为 0）
console.log(arr.includes(NaN));// true（正确）

// 在数组中搜索 arr.find()  arr.findIndex()   arr.findLastIndex()
let result = arr.find(function (item, index, array) {
    // 如果返回 true，则返回 item 并停止迭代
    // 对于假值（falsy）的情况，则返回 undefined
    // item 元素
    // index 索引
    // array 数组本身
});
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
let user = users.find(item => item.id == 1);
console.log(user.name); // John

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];
// 寻找第一个 John 的索引
console.log(users.findIndex(user => user.name == 'John')); // 0
// 寻找最后一个 John 的索引
console.log(users.findLastIndex(user => user.name == 'John')); // 3

// 转换数组 arr.map() 对数组的每个元素都调用函数，并返回结果数组
result = arr.map(function (item, index, array) {
    // 返回新值而不是当前元素
})
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// 转换数组 arr.sort(func) 就地排序
arr = [1, 2, 15];
// 该方法重新排列 arr 的内容
arr.sort();
console.log(arr);  // 1, 15, 2
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr.sort(compareNumeric);
console.log(arr);  // 1, 2, 15 

// 什么玩意没看懂
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
});

// 比较函数可以返回任何数字，比较函数只需要返回一个正数表示“大于”，一个负数表示“小于”。
arr = [1, 2, 15];
arr.sort(function (a, b) { return a - b; });
// arr.sort( (a, b) => a - b );
console.log(arr);  // 1, 2, 15

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich（错的）
console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam（对的！）

// reverese 反转数组
arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // 5,4,3,2,1

// // split 和 join
let names = 'Bilbo, Gandalf, Nazgul, Recv1, Recv2, Recv3';
arr = names.split(', ', 4); //很少使用
// arr = names.split(', ');
console.log(arr)
for (let name of arr) {
    console.log(`A message to ${name}.`); // A message to Bilbo（和其他名字）
}

let str = "a test string"
console.log(str.split('')) //['a', ' ', 't', 'e', 's', 't', ' ', 's', 't', 'r', 'i', 'n', 'g']

arr = ['Bilbo', 'Gandalf', 'Nazgul'];
str = arr.join('; '); // 使用分号 ; 将数组粘合成字符串
console.log(str); // Bilbo;Gandalf;Nazgul

// reduce / reduceRight
// arr.reduce( func , initial)
/*
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
accumulator —— 是上一个函数调用的结果，第一次等于 initial（如果提供了 initial 的话）。
item —— 当前的数组元素。
index —— 当前索引。
arr —— 数组本身。
*/
arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

arr = [1, 2, 3, 4, 5];
// 删除 reduce 的初始值（没有 0）
result = arr.reduce((sum, current) => sum + current); //如果没有初始值，那么 reduce 会将数组的第一个元素作为初始值，并从第二个元素开始迭代。
console.log(result); // 15

arr = [];
// Error: Reduce of empty array with no initial value
// 如果初始值存在，则 reduce 将为空 arr 返回它（即这个初始值）。
// arr.reduce((sum, current) => sum + current);

// Array.isArray
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(Array.isArray({})) // false
console.log(Array.isArray([])) // true

// 可选附加参数 thisArg
// 数组的find()，filter()，map()，除了 sort() 是一个特例，都接受一个可选的附加参数 thisArg。
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ... 
// thisArg 是可选的最后一个参数, thisArg 参数的值在 func 中变为 this。thisArg 用于传递上下文（passes the context）

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
