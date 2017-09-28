// function formatBinary(x) {
//   const y = x.toString(2);
//   return ("0000" + y).substr(-4);
// }
//
// const FLAG_READ = 1;
// const FLAG_WRITE = 2;
// const FLAG_EXECUTE = 4;
// console.log(formatBinary(FLAG_READ));
// console.log(formatBinary(FLAG_WRITE));
// console.log(formatBinary(FLAG_EXECUTE));
// console.log(formatBinary(FLAG_READ | FLAG_WRITE));
//
// let p = FLAG_READ | FLAG_WRITE;
// console.log(formatBinary(p));
// let hasWrite = p & FLAG_WRITE ? "Yes" : "No";
// console.log(`書き込みパーミッション:${hasWrite}`);
// let hasExecute = p & FLAG_EXECUTE ? "Yes" : "No";
// console.log(`実行パーミッション:${hasExecute}`);
//
// console.log(formatBinary(p));
// p = p ^ FLAG_WRITE;
// console.log(formatBinary(p));
// p = p ^ FLAG_WRITE;
// console.log(formatBinary(p));
// // 複数のフラグを一つの式に指定することも可能
// const hasReadAndWrite = p & (FLAG_READ | FLAG_WRITE) ? "good" : "bad";
// console.log(`${hasReadAndWrite}`);
//
// if (isPrime(n)) {
//   label = '素数';
// } else {
//   label = '非素数';
// }
//
// label = isPrime(n) ? '素数' : '非素数';
// // same meaning
//
// if(!options) options = {};
//
// options = options || {};
// // same meaning
