// const o = { name: "jelly",};
// const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
//
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));
// console.log(arr.indexOf("a"));
// console.log(arr.lastIndexOf("a"));
// console.log(arr.indexOf({ name: "jelly"}));
// console.log(arr.indexOf(o));
// console.log(arr.indexOf([1, 2]));
// console.log(arr.indexOf("9"));
// console.log(arr.indexOf(9));
//
// console.log(arr.indexOf("a", 5));
// console.log(arr.indexOf(5, 5));
// console.log(arr.indexOf(5, 4));
// console.log(arr.lastIndexOf(true, 3));
//
// const arr = [{ id: 5, name: "taro" }, { id: 7, name: "hanako"} ];
// console.log(arr.findIndex(o => o.id === 5)); //0 要素の番号
//
// //要素の添え字が欲しい場合はfindIndex, indexOfで問題ないが、要素自体が欲しい時
// const arr = [{ id: 5, name: "taro"}, { id: 7, name: "hanako"}];
// console.log(arr.find(o => o.id === 5));
//
//
// const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// console.log(arr.find(x, i) => i > 2 && Number.isIntger(Math.sqrt(x)));


class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}
Person.nextId = 0;
const ichiro = new Person("ichiro"),
      jiro = new Person("jiro"),
      saburo = new Person("saburo"),
      shiro = new Person("shiro");

const arr = [ichiro, jiro, saburo, shiro];

console.log(arr.find(p => p.id === saburo.id));
console.log(arr.find(function(p) {return p.id === this.id}, saburo));
console.log(arr.find(p => p.id === this.id, saburo));

const arr = [5, 7, 12, 15, 17];
console.log(arr,some(x => x%2===0));
console.log(arr.some(x => Number.isIntger(Math.sqrt(x))));
//every も存在し、全てが適している　場合true
