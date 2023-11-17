// if和问号
let year = prompt('In which year was ECMAScript-2015 specification published?', '2016');

if (year == 2015) alert('You are right!');
if (year == 2015) {
    console.log('You are right!');
    console.log('You are right!');
    console.log('You are right!');
}

// 布尔转换
// 数字 0、空字符串 ""、null、undefined 和 NaN 都会被转换成 false。因为它们被称为“假值（falsy）”。
// 其他值被转换为 true，所以它们被称为“真值（truthy）”。
if (0) { // 0 是假值（falsy）
    // ...
}

if (1) { // 1 是真值（truthy）
    // ...
}
let cond = (year == 2015); // 相等运算符的结果是 true 或 false

if (cond) {
    console.log('正确')
} else {
    console.log('❌')
}

if (false) {
    console.log('正确')
} else if (Number(year) > 2015) {
    console.log('大于2015')
} else {
    console.log('❌')
}

let year1 = 2016

if (year1 < 2015) {
    console.log('Too early...');
} else if (year1 > 2015) {
    console.log('Too late');
} else {
    console.log('Exactly!');
}

// 问号运算符，三元运算符： let result = condition ? value1 : value2;
let age = 18
let accessAllowed = (age > 18) ? true : false;
let msg;

// 多个?
msg = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
console.log(msg);

if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}

// ?的非常规使用
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

if (company == 'Netscape') {
    alert('Right!');
} else {
    alert('Wrong.');
}
