// alert 模态框
alert('')
alert("Hello");

// prompt 模态窗口
let title = 'title'
let input = 'default'
let your_input = prompt(title, input)
console.log(your_input)

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); 

let test1 = prompt("Test");
let test2 = prompt("Test", '');

// confirm 模态窗口
let is_boss
is_boss = confirm("Are you lost?")
console.log(is_boss)

//模态: 暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。
