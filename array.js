const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
  {
    name: "monkey", type: "object", luckynumbers: [5, 7, 13]
  },
  [
    { name: "kiji", type: "object" },
    {name: "oni", type: "object" }
  ],
  function() {
    return "配列の要素として関数を記憶することもできる";},
    "three",
];

const arr5 = new Array();
console.log(arr5);
const arr6 = new Array(1, 2, 3);
console.log(arr6);
const arr7 = new Array(2);//two blanks
console.log(arr7);
console.log(arr7[1]);
const arr8 = new Array("2");//two
console.log(arr8);

let arr = ["b", "c", "d"];
console.log(arr.push("e"));//length 4 will apear
console.log(arr);//comes with a b c d e
console.log(arr.pop());//only e
console.log(arr);//b, c, d
console.log(arr.unshift("a"));//length 4
console.log(arr);//a, b, c, d
console.log(arr.shift());//a
console.log(arr);//b, c, d

let arr = [1, 2, 3];
let arr2 = arr.concat(4, 5, 6);
console.log(arr);
console.log(arr2);//add arr2 in arr
arr2 = arr.concat([4, 5, 6]);
console.log(arr2);
arr2 = arr.concat([4, 5], 6);
console.log(arr2);
arr2 = arr.concat([4, 5], [6, 7]);
console.log(arr2);
arr2 = arr.concat(4, [5, 6]);
console.log(arr2);

let arr = [11, 12, 13, 14, 15];
let arr2 = arr.slice(3);
console.log(arr2);//14,15
console.log(arr);//そのまま
arr2 = arr.slice(2, 4);
console.log(arr2);//13,14
arr2 = arr.slice(-2);
console.log(arr2);//14,15
arr2 = arr.slice(1, -2);
console.log(arr2);//12,13
arr2 = arr.slice(-2, -1);
console.log(arr2);//14


let arr = [1, 5, 7];
let arr2 = srr.splice(1, 0, 2, 3, 4);
console.log(arr);//show all numbers without 6
console.log(arr2);//nothing is deleted
arr2 = arr.splice(5, 0, 6);//add 6
console.log(arr);//show all numbers
console.log(arr2);//nothing is deleted
arr2 = arr.splice(1, 2);//delete two numbers
console.log(arr);//delete 2, 3
console.log(arr2);//2, 3 apears
arr2 = arr.splice(2, 1, 'a', 'b');//delete form arr[2] add a, b
console.log(arr);//5 => a, b
console.log(arr2);//5 was deleted

let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2);
console.log(arr);
console.log(arr2);
console.log(arr.copyWithin(2, 0, 2));
console.log(arr.copyWithin(0, -3, -1));
console.log(arr2);
