/* 
对象：存储带有键的数据的集合
数组：存储【有序】集合
*/

/* map：带键的数据项的集合，允许任何类型的键 */
// new Map() —— 创建 map。
// map.set(key, value) —— 根据键存储值。
// map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
// map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
// map.delete(key) —— 删除指定键的值。
// map.clear() —— 清空 map。
// map.size —— 返回当前元素个数。

let map = new Map();
map.set('1', 'str1')// 不要使用map[key]的形式，而应该使用set和get
map.set(1, 'num1')
map.set(true, 'bool1')
console.log(map.get(1))// 不要使用map[key]的形式
console.log(map.get('1'))
console.log(map.get(true))
console.log(map.size)

let obj = { name: "John" }
let visit_counter = new Map()
visit_counter.set(obj, 123)
console.log(visit_counter.get(obj))

// javascript中，不能使用 object1 作为 object2 的键
let john = { name: "John" }
let ben = { name: "Ben" }
let visit_counter_obj = {}
visit_counter_obj[john] = 234  //--> 自动转换为"[object Object]"
// visit_counter_obj[ben] = 123  // 尝试将对象用作键，但我们会发现使用对象 ben 作为键存下的值会被替换掉
console.log(visit_counter_obj)

// Map使用 SameValueZero 算法比较键是否相等，NaN 被看成是等于 NaN
// Map支持链式调用
let lang = new Map().set('1', 'c').set(1, 'java').set(true, 'lua')
console.log(lang)

// Map迭代
// map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
// map.values() —— 遍历并返回一个包含所有值的可迭代对象，
// map.entries() —— 遍历并返回一个包含所有实体 [key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个。

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (const key of recipeMap.keys()) {
    console.log(key) // cucumber, tomatoes, onion
}
for (const value of recipeMap.values()) {
    console.log(value) // 500, 350, 50
}
for (const entry of recipeMap.entries()) {
    console.log(entry) // cucumber,500 (and so on)
}
recipeMap.forEach((v, k, map) => {
    console.log(`${k}: ${v}`)
})

// Object => Map
// 键值对 [key, value] 数组
map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
obj = {
    name: "John",
    age: 23,
    gender: "male"
}
map = Object.entries(obj)
console.log(map)
// console.log(Object.entries())
for (const item of Object.entries(obj)) {
    console.log(item)
}

// Map => Object
map = new Map().set('banana', 1).set('orange', 2).set('meat', 4)
obj = Object.fromEntries(map.entries())
obj = Object.fromEntries(map)
console.log(obj)

/* set : 值的集合，没有键，每个值只能出现一次，互不相同
new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
set.add(value) —— 添加一个值，返回 set 本身
set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
set.clear() —— 清空 set。
set.size —— 返回元素个数。
*/
let set = new Set()
john = { name: "john" }
let pete = { name: "pete" }
let mary = { name: "mary" }
set.add(john)
set.add(pete)
set.add(mary)
set.add(john)
console.log(set)
for (const user of set) {
    console.log(user.name)
}
//使用array.find()模拟set时性能会比较差

/* set 迭代 */
set = new Set(['orrange', 'apples', 'bananas'])
for (const item of set) {
    console.log(item)
}
set.forEach((v, v_again, set) => {
    console.log(v, v_again)
})
// set.keys()
for (const value of set.keys()) {
    console.log(value) //bananas
}
// set.values()
for (const value of set.values()) {
    console.log(value) //bananas
}
// set.entries()
for (const value of set.entries()) {
    console.log(value) //['bananas', 'bananas']
}

// map与set的顺序与插入顺序一致，但是不能排序，不能根据下标访问
