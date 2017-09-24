let funds = 50;
while(funds > 1 && funds < 100) {
  //賭ける
  //サイコロを振る
  //払戻金をもらう
  funds = funds + 2;
  funds = funds - 1;
}
/*
while文　指定した処理を繰り返す
block文　複数の文を１つの単位に
*/
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"] [rand(0, 5)];
}
//ヘルパー関数　乱数を定義する

const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
let totalBet = rand(1, funds);
if( totalBet === 7 ) {
  totalBet = funds;
  bets.heart = totalBet;
} else {
  //掛け金をランダムに賭ける
}
funds = funds - totalBet;

//else if文　

let remaining = totalBet;
do {
  let bet = rend(1, remaining);
  let face = randFace();
  bets[face] = bets[face] + bet;
  remaining = remaining - bets;
} while(remaining > 0);

const hand = [];
for(let roll = 0; roll < 3; roll++) {
  hand.push(randFace());
}
//サイコロを振る動作
let winnings = 0;
for(let die=0; die < hand.length; die++) {
  let face = hand[die];
  if(bets[face] > 0) winnings = winnings + bets[face];
  //サイコロの出目と同じマスに掛け金があれば、それを払戻金に追加
}
funds = funds + winnings;

if(new Date().getDay() === 3) {
  totalBet = 1;
} else if(funds === 7) {
  totalBet = funds;
} else {
  console.log("演技担ぎなし。");
}//if else文
//水曜日だったのであれば、掛け金を１ペニーにする。

if(new Date().getDay() === 3) {
  totalBet = 1;
} else {
  if(funds === 7) {
    totalBet = funds;
  } else {
    console.log("縁起担ぎはなし。");
  }
}
//block文
