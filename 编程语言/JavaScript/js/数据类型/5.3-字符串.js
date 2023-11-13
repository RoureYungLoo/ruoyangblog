// 1. JS中，只有字符串，没有单独的字符
// 2. 字符串的内部格式始终是UTF-16，不依赖于页面编码

// 引号
let str1 = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;  //反引号①支持${}嵌入表达式，②允许多行跨行字符串

function sum(a, b) {
    return a + b
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // 客人清单，多行

// 特殊字符
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList); // 一个多行的客人列表
/*
\n      换行
\r\n    换行
\'  \"  引号
\\      反斜线
\t      制表符
\xXX    有给定十六进制 Unicode XX 的 Unicode 字符
\uXXXX  以 UTF-16 编码的十六进制代码 XXXX 的 Unicode 字符
\u{XXXXXX}  具有给定 UTF-32 编码的 Unicode 符号。一些罕见的字符用两个 Unicode 符号编码，占用 4 个字节
*/
console.log("\u00A9")
console.log("\u{20331}")
console.log("\u{1f60D}")
console.log('I\'m ...')
console.log("I 'm ...")
console.log(`I 'm ...`)
console.log(`I 'm ..\\.`)

// 字符串长度
console.log(str1.length) // 是属性而不是函数，不要写成str1.length()

// 访问字符
console.log(str1[2])
console.log(str1.charAt(2))
console.log(str1.charAt(str1.length - 1))

console.log(str1[1000]) // undefined
console.log(str1.charAt(1000)) // ''（空字符串）
for (let char of str1) {
    console.log(char)
}

// 字符串是不可变的
let str2 = "Hiiiii"
str2[0] = 'h'
console.log(str2)

// 改变大小写 str.toLowerCase(), str.toUpperCase()
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1[5].toUpperCase())

// 查找子串 str.indexOf(substr,pos)
let str = 'Widget with id';
console.log(str.indexOf('Widget')) // 0 
console.log(str.indexOf('with'))    // 7
console.log(str.indexOf('id'))      // 1
console.log(str.indexOf('id', 2))    // 12
console.log(str.lastIndexOf('id'))   // 12

str = "As sly as a fox, as strong as an ox"
let target = 'as'
function multi_found(str, target) {
    // let pos = 0
    // while (true) {
    //     let found_pos = str.indexOf(target, pos)
    //     if (found_pos == -1) break
    //     console.log(`Fount '${target}' at position ${found_pos}`)
    //     pos = found_pos + 1
    // }
    let pos = -1
    while ((pos = str.indexOf(target, pos + 1)) != -1) {
        console.log(pos)
    }

}
multi_found(str, target)

// 按位（bitwise）NOT 技巧: 对于 32-bit 整数，~n 等于 -(n+1)。
str = "Widget";
if (~str.indexOf("Widget")) {
    console.log('Found it!'); // 正常运行
}

// includes, startsWith, endsWith
console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false, 从位置 3 开始没有 "id"
console.log("Widget".startsWith("Wid")); // true，"Widget" 以 "Wid" 开始
console.log("Widget".endsWith("get")); // true，"Widget" 以 "get" 结束

// 获取子字符串 substring、substr，slice
str = "stringify";
console.log(str.slice(0, 5)); // 'strin'，从 0 到 5 的子字符串（不包括 5）
console.log(str.slice(0, 1)); // 's'，从 0 到 1，但不包括 1，所以只有在 0 处的字符
console.log(str.slice(2)); // 从第二个位置直到结束
// 从右边的第四个位置开始，在右边的第一个位置结束
console.log(str.slice(-4, -1)); // 'gif'

// 这些对于 substring 是相同的
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ……但对 slice 是不同的：
console.log(str.slice(2, 6)); // "ring"（一样）
console.log(str.slice(6, 2)); // ""（空字符串）
console.log(str.substr(2, 4)); // 'ring'，从位置 2 开始，获取 4 个字符
console.log(str.substr(-4, 2)); // 'gi'，从第 4 位获取 2 个字符

// 优先使用str.slice()
/*
方法	                选择方式……	                            负值参数
slice(start, end)	    从 start 到 end（不含 end）	            允许
substring(start, end)	从 start 到 end（不含 end）	            负值被视为 0
substr(start, length)	从 start 开始获取长为 length 的字符串	 允许 start 为负数
*/

// 比较字符串
// 所有的字符串都使用 UTF-16 编码。即：每个字符都有对应的数字代码。有特殊的方法可以获取代码表示的字符，以及字符对应的代码。
console.log("z".codePointAt(0))
console.log("Z".codePointAt(0))
console.log(String.fromCodePoint(90)) // Z
console.log('\u005a') // Z

function fromCodePoint(start, end) {
    let str = ''
    for (let i = start; i <= end; i++) {
        str += String.fromCodePoint(i);
    }
    console.log(str);
}
fromCodePoint(1, 520)

// 正确比较字符串
console.log('Österreich'.localeCompare('Zealand'))

// 代理对   2 字节只允许 65536 个组合，这对于表示每个可能的符号是不够的。所以稀有的符号被称为“代理对”的一对 2 字节的符号编码
console.log('𝒳'.length); // 2，大写数学符号 X
console.log('😂'.length); // 2，笑哭表情
console.log('𩷶'.length); // 2，罕见的中国象形文字
console.log('😂'[0]) //�
console.log('😂'[1]) //�
console.log('😂'.charCodeAt(0).toString(16)) //d83d
console.log('😂'.charCodeAt(1).toString(16)) //de02

// 变音符号与规范化
console.log('S\u0307');
console.log('S\u0307\u0323');

let s1 = 'S\u0307\u0323'; // Ṩ，S + 上点 + 下点
let s2 = 'S\u0323\u0307'; // Ṩ，S + 下点 + 上点
console.log(`s1: ${s1}, s2: ${s2}`);
console.log('s1 == s2: ', s1 == s2); // false，尽管字符看起来相同（?!）
// 解决看起来一样实际不一样的字符
console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize()); // true
console.log("S\u0307\u0323".normalize().length); // 1
console.log("S\u0307\u0323".normalize() == "\u1e68"); // true
console.log("\u1e68"); // Ṩ

// str.trim() —— 删除字符串前后的空格 (“trims”)。
// str.repeat(n) —— 重复字符串 n 次。
