// 数组, JavaScript中的数组更像是集合，可以存储不同的数据类型
// 声明
let arr1 = new Array()
let arr2 = []
let lang = ['en', 'cn', 'jp']

console.log(lang[0])
console.log(lang[1])
console.log(lang[2])
console.log(lang[3]) //undefined

let mix_arr = [
    "apple",
    { name: "john" },
    true,
    function () { console.log("I'm a function"); },
]
console.log(mix_arr[1])
console.log(mix_arr[3]())
mix_arr[3]()

// 访问数组最后一个元素
mix_arr[mix_arr.length - 1]()
mix_arr.at(-1)()
// arr.at(i)：
// 如果 i >= 0，则与 arr[i] 完全相同。
// 对于 i 为负数的情况，它则从数组的尾部向前数。

// pop/push, shift/unshift 方法
// 队列queue push，shift
// 栈stack pop，push
// 双端队列deque
let days = ['一', '二', '三', '四', '五', '六', '七']
console.log(days.pop())
console.log(days)
console.log(days.push('八'))
console.log(days)
console.log(days.shift())
console.log(days)
days.unshift('〇')
console.log(days)
days.push('9', '10')
days.unshift('-2', '-1')
console.log(days)

// 内部  在 JavaScript 中只有 8 种基本的数据类型（详见 数据类型 一章）。
// 数组是一个对象，因此其行为也像一个对象。
let fruits = ["Banana"]
let arr = fruits; // 通过引用复制 (两个变量引用的是相同的数组)
console.log(arr === fruits); // true
arr.push("Pear"); // 通过引用修改数组
console.log(fruits); // Banana, Pear — 现在有 2 项了

/* 数组的错误使用方式：
1. 添加一个非数字的属性，比如 arr.test = 5。
2. 制造空洞，比如：添加 arr[0]，然后添加 arr[1000] (它们中间什么都没有)。
3. 以倒序填充数组，比如 arr[1000]，arr[999] 等等。
*/

// 性能
// push/pop 方法运行的比较快，而 shift/unshift 比较慢。
// 很显然，在尾部增删元素非常快【尾插/删法】，在头部增删元素最慢【头插/删法】

// 循环
arr = ["Apple", "Orange", "Pear"];
// for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for of, 不能获取索引，只能获取元素
for (const item of arr) {
    console.log(item)
}

// for in ,for..in 循环会遍历 所有属性，不仅仅是这些数字属性。
// for..in 循环适用于普通对象，并且做了对应的优化。但是不适用于数组，因此速度要慢 10-100 倍。
for (const key in arr) {
    console.log(key, arr[key])
}

// 数组长度 关于length，JS中的数组的length是可读可写的
arr = [1, 2, 3, 4, 5];
arr.length = 2; // 截断到只剩 2 个元素
console.log(arr); // [1, 2]
arr.length = 5; // 又把 length 加回来
console.log(arr[3]); // undefined：被截断的那些数值并没有回来

// new Array(),
arr = new Array(2); // 会创建一个 [2] 的数组吗？
console.log(arr)
console.log(arr[0]); // undefined！没有元素。
console.log(arr.length); // length 2

// 多维数组
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); // 最中间的那个数
console.log(matrix.toString())

// toString js数组有自己的toString方法实现
console.log(days.toString())

// 不要使用 == 比较数组
console.log([] == []); // false
console.log([0] == [0]); // false
console.log(0 == []); // true
console.log('0' == []); // false
// 在 [] 被转换为 '' 后
console.log(0 == ''); // true，因为 '' 被转换成了数字 0
console.log('0' == ''); // false，没有进一步的类型转换，是不同的字符串
