let name = "桃太郎";
let age = 25;

function greet() {
  console.log(`hello, ${name}`);
}
function age() {
  return new Date().getFullYear() - age;
}

greet();

console.log(getFullYear());

console.log(typeof x); {
  const x = 3;
  console.log(x);
}
console.log(typeof x);//undefined

let globalFunc; {
  let blockVar = 'a';
  globalFunc = function() {
    console.log(blockVar);
  }
}
globalFunc();

let f; {
  let o = { note: 'safe', note2: 'no problem' };
  f = function() {
    console.log("無名関数の中:" + o.note);
    return o;
  }
}
let oRef = f();
console.log(oRef);
oRef.note = "not safe at all";
console.log(oRef);

const message = (function() {
  const secret = "im a secret man";
  return `length fo my secret is ${secret.length}`;
})();

const f = (function() {
  let count = 0;
  return function() {
    return `times that the amount was called is ${++count}`;
  }
})();
console.log(f());
console.log(f());
console.log(f());
console.log(f());
