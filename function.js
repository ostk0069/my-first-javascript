// function getGreeting() {
//   return "Hello world!"
// }
//
// const f = getGreeting;
// console.log(f());
//
// const o = {};
// o.f = getGreeting;
// console.log(o.f());
//
// const arr = [1, 2, 3];
// arr[1] = getGreeting;
// const message = arr[1]();
// console.log(message);
//
// function avg(a, b) {
//   return (a + b)/2
// }
//
// const a = 5, b = 10;
// console.log(avg(a, b));
//
// function f(x) {
//   console.log(` 関数fの中(代入の前):x=${x}`);
//   x = 5;
//   console.log(`関数fの中(代入の後):x=${x}`);
// }
//
// let x = 3;
// console.log(`関数を呼び出す前: x=${x}`);
// f(x);
// console.log(`関数を呼び出す後: x=${x}`);

// perimittive
// for object the final amount will be changed

// function s(o) {
//   console.log(`fの中(２つの代入の前):o.message="${o.message}"`);
//   o.message = "fで最初にセットされた";
//   console.log(`fの中(２つの代入の間):o.message="${message}"`);
//   o = {
//     message: "新しいオブジェクト！"
//   };
//   console.log(`fの中(2つの代入の後):o.message="${o.message}"`);
// }
//
// let o = {
//   message: '初期値'
// };
// console.log(`fの呼び出し前:o.message="${o.message}"`);
// s(o);
// console.log(`fの呼び出し後:o.message="${o.message}"`);
//
// function addPrefix(prefix, ...words) {
//   const prefixedWords = {};
//   for(let i=0; i<words.length; i++) {
//     prefixedWords[i] = prefix + words[i];
//   }
//   return prefixedWords;
// }
//
// console.log(addPrefix("con", "verse", "vex"));
//
// const o = {
//   name: 'wallance',
//   bark: function() { return 'woof!'; }
//   // bark() { return 'woof!' };
// }
//
// console.log(o);
// console.log(o.bark());

// const o = {
//   name: 'Julie',
//   greetBackwards: function() {
//     const self = this;//important
//
//     function getReverseName() {
//       let nameBackwards = '';
//       for(let i=this.name.length-1; i>=0; i--) {
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     }
//     return `${getReverseName()} si eman ym ,olleH`;
//   },
// };

// console.log(o.greetBackwards());
// // arrow script
// const f1 = function() { return "hello!"; }
// const f1 = () => "hello!";
// const f2 = name => `hello, ${name}`;

// const o = {
//   name: 'Julie',
//   greetBackwards: function() {
//     const getReverseName = () => {
//       let nameBackwards = '';
//       for(let i=this.name.length-1; i>=0; i--) {
//         nameBackwards += this.name[i];
//       }
//       return nameBackwards;
//     };
//
//     return `${getReverseName()} si eman ym ,olleH`;
//   },
// };
//
// console.log(o.greetBackwards());
