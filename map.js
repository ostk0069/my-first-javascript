const cart = [ { name: "Iphone", price: 54800 }, { name: "Android", price: 49800 };
const names = cart.map(x => x.name);
console.log(names);
const prices = cart.map(x => x.price);
console.log(prices);
const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);
// const lcnames = names.map(x => x.toLowerCase);
// console.log(lcnames); only for firefox

const cards = [];
for(let mark of ['heart', 'clover', 'diamond', 'spade'])
for(let number=1; number<=13; number++)
cards.push({ mark, number});

let choosedCards = cards.filter(card => card.number ===2 );
console.log(choosedCards);

const words = ["beachball", "ROdeo", "Angel", "Aardvark", "Xylophone", "November",
"Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
  if(!a[x[o]])
  a[x[o]] = [];
  a[x[0]].push(x);
  return a; }, {});
  console.log(alphabetical);

  //list will be numbered in alphabetical

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta/a.N;
  a.M2 += delta*(x - a.mean);
  return a;
}, { N: 0, mean: 0, M2: 0 });
if(stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);
const words = [//以下略
];
const longwords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longwords);


const arr = Array(10).map(function(x) { return 5 });
console.log(arr);
//[ , , , , , , , ]
const arr = [1, 2, 3, 4, 5]
delete arr[2];
console.log(arr);
const result = arr.map(x => 0);
console.log(result);//[0, 0,  , 0, 0]
console.log(result[2]);//undefind

const arr = [1, null, "hello", "world", true, undefind];
delete arr[3];
let result = arr.join();
console.log(result);
result = arr.join('');//1hellotrue
console.log(result);
result = arr.join(' -- ');//1 -- -- hello -- -- true --
console.log(result);
