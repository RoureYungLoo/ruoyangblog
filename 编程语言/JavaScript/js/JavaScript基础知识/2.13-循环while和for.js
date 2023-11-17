// while
// while (condition) {
//     // 代码
//     // 所谓的“循环体”
// }

let i = 0;
while (i < 3) { // 依次显示 0、1 和 2
    console.log(i);
    i++;
}
// 循环体的单次执行叫作 一次迭代

let x = 3;
while (x) { // 当 i 变成 0 时，条件为假，循环终止
    console.log(x);
    x--;
}

let y = 3;
while (y) console.log(y--);

// do…while 循环, 至少执行一次
// do {
//     // 循环体
// } while (condition);

let m = 0;
do {
    console.log(m);
    m++;
} while (m < 3);

// for循环
// for (begin; condition; step) {
//     // ……循环体……
// }


for (let i = 0; i < 3; i++) { // 结果为 0、1、2
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // 错误，没有这个变量。

i = undefined
i = 0;
for (i = 0; i < 3; i++) { // 使用现有的变量
    console.log(i); // 0, 1, 2
}
console.log(i); //3，可见，因为是在循环之外声明的

// for (; ;) {
//     // 无限循环
// }

// 跳出循环 break
while (1) {
    console.log("1")
    break;
}

let sum = 0;
let z = 1;
while (true) {
    let value = z++
    console.log(value)
    if (value == 5) break; // (*)
    sum += value;
}
console.log('Sum: ' + sum);

// 进行下一次迭代 continue
for (let i = 0; i < 10; i++) {
    //如果为真，跳过循环体的剩余部分。
    if (i % 2 == 0) continue;
    console.log(i); // 1，然后 3，5，7，9
}

for (let i = 0; i < 10; i++) {
    if (i % 2 - 1) {
        console.log(i);
    }
}

// 禁止 break/continue 在 '?' 的右边
if (i > 5) {
    alert(i);
} else {
    // continue;
}

// (i > 5) ? alert(i) : continue; // continue 不允许在这个位置

// break/continue 标签
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         // 如果我想从这里退出并直接执行 alert('Done!')
//     }
// }
// alert('Done!');

// break <labelName> 语句跳出循环至标签处：
outer: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // 如果是空字符串或被取消，则中断并跳出这两个循环。
        if (!input) break outer; // (*)
        // 用得到的值做些事……
    }
}

alert('Done!');
