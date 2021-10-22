'use strict';

// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//   if (name === 'taguchi'){
//     console.log('Good job!');
//   }
// }

// 論理演算子
// && なおかつ（AND）
// || もしくは（OR）
// ! 〜ではない（NOT）

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }

// const signal = 'green';

// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!') ; 
// } else if (signal === 'blue') {
//   console.log('Go!');
// }

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong Signal!');
//     break;
// }

// for (let i = 1; i <= 10; i++) {
//   // console.log('hello');
//   // console.log('hello' + i);
//   console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// let hp = -50;

// do  {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);

// for (let i = 1; i <= 10; i++) {
//   // if (i === 4) {
//   // // if ( i % 3 === 0){
//   //   continue;
//   // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// function showAd (message = 'Ad') {  // 仮引数
//   console.log('-----------');
//   console.log(`---- ${message} ---`);
//   console.log('-----------');    
// }

// showAd('Header Ad');  // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');

// function sum(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// }

// const total = sum(1, 2, 3) + sum(4, 5, 6);
// console.log(total);

// function sum(a, b, c) {
//     return a + b + c;
//   }
// const sum = function(a, b, c) {
//     return a + b + c;
//   };
// const sum = (a, b, c) =>  a + b + c;
  
//   const total = sum(1, 2, 3) + sum(4, 5, 6);
//   console.log(total);
  
// const double = function(a) {
//   return a * 2;
// }
// const double = a => a * 2;

// console.log(double(12))

// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);
// {
//   const x = 100;
//   console.log(x);
// }

// {
  // const score = 80;
  // const score = 90;
  // const score = 40;

  // const scores = [80, 90, 40];
  // console.log(scores[1]);

  // scores[2] = 44,    constそのものの代入はできないが、配列には代入ができる
  // console.log(scores);  

  // console.log(scores.length);

//   const scores = [80, 90, 40, 70];
//   // scores.push(60, 50);  // 配列に新たに追加する場合、先頭追加はunshift、末尾追加はpushを使う。（,）カンマ区切りでいくつでも追加できる。
//   // scores.shift(); // 配列を削除する場合、先頭削除はshift、末尾削除はpopを使う。※削除は一つずつしかできないので、注意

//   scores.splice(1, 0, 30, 20) // 場所を指定して削除や追加ができる(場所,削除数,文字数いくつでも)

//   // console.log(`Score: ${scores[0]}`);
//   // console.log(`Score: ${scores[1]}`);
//   // console.log(`Score: ${scores[2]}`);

//   // for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < scores.length; i++) {  //配列の数が増えた場合、i < 3の数字を増やすのは手間なので、配列の数を表すlengthを使う
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   // console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(...otherScores); // スプレッド構文は関数の因数にも使われる。
//   // sum(10, 20); // 上文と同じ
// }

// {
//   const scores = [80, 90, 40, 70];

//   // const [a, b, c, d]  = scores;
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);

//   // const [a, b, ...others]  = scores;
//   // console.log(a);
//   // console.log(b);
//   // console.log(...others);

// //   let x = 30; // 分割代入はconstでも可能だが、代入（入換）はletを使う。
// //   let y = 70;
// //   [x, y] = [y, x];
// //   console.log(x);
// //   console.log(y);

// // scores.forEach((score) => {
// scores.forEach((score, index) => {  //forEach（一つ目の引数で中身の情報を受け取る、二つ目の引数で何番目かの情報を受け取る）
//   console.log(`Score${index}: ${score}`);
// });

// }

// {
//   const prices = [180, 190, 200];

//   // const updatedPrices = prices.map((price) => {
//   //   return Price + 20;
//   // });
//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }

// {
//   const numbers = [1, 4, 7, 8, 10];

//   // const evenNumbers = numbers.filter(number => {
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // });
//   const evenNumbers = numbers.filter(number => number % 2 === 0); // filterは配列の各要素を呼び出してtrueと評価された値を返す。

//   console.log(evenNumbers);
// }

// {
  // const pont = [100, 180];
  // const point = {x: 100, y: 180};
  // const point = {
  //   x: 100, 
  //   y: 180,
  // };

//   point.x = 120;
//   // point['x'] = 120;

//   // console.log(point.x);
//   // console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point)
// }
// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   }

//   const point = {
//     x: 100, 
//     y: 180,
//     ...otherProps,
//   };

//   // console.log(point);

//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

//   //  const keys = Object.keys(point);
//   //  keys.forEach(key => {
//   //    console.log(`Key: ${key} Value: ${point[key]}`);
//   //  });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ]
//   console.log(points[1].y);
// }

// {
//   // let x = 1;
//   // let y = x;
//   // x = 5;
//   // console.log(x); // 5
//   // console.log(y); // 1

//   // let x = [1, 2];
//   // let y = x;
//   // x[0] = 5;
//   // console.log(x); // [5, 2]
//   // console.log(y); // [5, 2]

//   let x = [1, 2];
//   let y = [...x]; 
//   x[0] = 5;
//   console.log(x); // [5, 2]
//   console.log(y); // [1, 2]
// }

// {
//   const str = 'hello';

//   // console.log(str.length);

//   // str.substring(開始位置, 終了位置);
//   // console.log(str.substring(2, 4));

//   console.log(str[1]);
//   // str[1] = 'a'; // 値の設定はできない
// }
// {
// const d = [2019, 11, 14];
// // console.log(d.join('/'));
// console.log(d.join(''));

//   const t = '17:08:24';
//   // console.log(t.split(':'));
//   const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }

// {
//   const scores = [10, 3, 9];

//   let sum  = 0;
 
//   scores.forEach(score => {
//     sum += score;
//   });

//   const avg = sum / scores.length;

//   // console.log(sum);
//   // console.log(avg);

//   // console.log(Math.floor(avg)); // 小数点切り下げ
//   // console.log(Math.ceil(avg));  // 小数点切り上げ
//   // console.log(Math.round(avg)); // 小数点四捨五入
//   // console.log(avg.toFixed(3)); // カッコ内の小数点まで表示

//   console.log(Math.random());

// }

// {
//   // console.log(Math.floor(Math.random() * max + 1 - min) + min;
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// {
//   const d = new Date();
//   // console.log(d);
//   const hua = 'こんにちは'

//   let d2 = d.getDay();
//     if (d.getDay() === 0){
//       d2 = '日'; 
//     } else if (d.getDay === 1){
//       d2 = '月';
//     } else if (d.getDay === 2){
//       d2 = '火';
//     } else if (d.getDay === 3){
//       d2 = '水';
//     } else if (d.getDay === 4){
//       d2 = '木';
//     } else if (d.getDay === 5){
//       d2 = '金';
//     } else if (d.getDay === 6){
//       d2 = '土';
//     }

//   console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日 (${d2})`);
// }

// {
//   const d = new Date(2019, 10); // 2019/11/01 00:00:00
//   d.setHours(10, 20, 30); // 2019/11/01 10:20:30
//   d.setDate(31); // 2019/12/01 10:20:30
//   d.setDate(d.getDate() + 3); // 2019/12/01 10:20:30
//   console.log(d);

// }

// {
//   // alert('hello'); // ウィンドウで表示

//   const answer = confirm('削除しますか？'); // ウィンドウで表示（on/offあり）
//   if(answer){
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i ++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);

// }

// {
//   let i = 0;
//   let x = 'hello';

//   function showtime() {
//     console.log(new Date);
//     const timeoutId  = setTimeout(showtime, 1000);
//     i ++;
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }

//   showtime();

// }

// setInterval は一定時間ごとに処理を実行する命令になる。
// setTimeout は指定した時間後に処理を行う。

// {
  // const name = 'taguchi';
//   const name = 5;

//   try {
//     console.log(name.toUpperCase()); // 大文字にする。文字列しか使えない
//   } catch (e) { // ここで引数を設定すると例外の情報をこの引数で扱えるようになる。
//     console.log(e);
//     return (e)
//   }

//   console.log('Finish!');
// }

// {
//   class Post { // 親クラス
//       constructor(test) {
//         this.text = test;
//         this.likeCount = 0;
//       }

//       show() {
//         console.log(`${this.text} - ${this.likeCount}likes`)
//       }

//       like() {
//         this.likeCount++;
//         this.show();
//       }
//   }
//   class SponsoredPost extends Post { // 子クラス（クラスの継承）
//       constructor(text, sponsor) {
//         super(text);
//         this.sponsor = sponsor;
//       }

//       show() {
//         super.show();
//         console.log(`... sponsored by ${this.sponcer}`);
//       }

//       // // 静的メソッド
//       // static showInfo() {
//       //   console.log('Post class version 1.0');
//       // }
//   }


//   const posts = [
//     new Post('JAvaScriptの勉強･･･'),
//     new Post('プログラミング楽しい！'),      
//     new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//   ];
//   posts[2].show();
//   posts[2].like();


// // Post.showInfo();

//   // function show(post) {
//   //   console.log(`${post.text} - ${post.likeCount}いいね`);
//   // }

//   // posts[0].like();
//   // posts[0].likeCount++; // Postsのプロパティにアクセスするのは推奨されていない。なぜならlikeCountの名前を変更したい場合、すべて変更しないといけなくなる。

//   // posts[0].show();
//   // posts[1].show();
// }

// {
//   function update() {
//     // document.querySelector('h1').textContent = 'Changed!';
//     // document.querySelector('#target').textContent = 'Changed!';
//     // document.getElementById('target').textContent = 'Changed!';

//     // document.querySelector('p').textContent = 'Changed!'; // querySelectorはこのセレクターで見つかった要素のうち最初のものだけしか取得しない
//     // document.querySelectorAll('p')[1].textContent = 'Changed!'; // 全ての要素を取得したい場合、querySelectorAllとして取得し、[]で配列を指定する。
//     document.querySelectorAll('p').forEach((p, index) => {
//       p.textContent = `${index}番目のpです！`;
//     });
//   }

//   setTimeout(update, 1000);
// }

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     targetNode.textContent = 'Change!';
//     targetNode.title = 'This is title!';
//     targetNode.style.color = 'red'; // styleも変えることができる
//     targetNode.style.backgroundColor = 'skyblue'; // -を使うstyleを変更する場合は２単語めの最初の文字を大文字にする
//   });
// }

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const targetNode = document.getElementById('target');

//     // targetNode.className = 'my-color my-border'; // classNameで設定すると、元々ついていたクラスに上書きされてしまうので、元のstyleも保持したいのであれば元からあったクラスも指定する。
//     // targetNode.classList.add('my-color'); // classListはクラスを追加するので、既存のクラスを保持したまま追加ができる。
//     // if(targetNode.classList.contains('my-color') === true) {
//     //   targetNode.classList.remove('my-color');
//     // } else {
//     //   targetNode.classList.add('my-color');
//     // }
//       targetNode.classList.toggle('my-color');
//   });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//       const targetNode = document.getElementById('target');

//       // targetNode.textContent = 'Dotinstall';
//       targetNode.textContent = targetNode.dataset.translation;
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//       const item2 = document.createElement('li');
//       item2.textContent = 'item 2';

//       // const ulNode = document.querySelector('ul');
//       const ul = document.querySelector('ul');
//       ul.appendChild(item2);
//     });
// }
// {
//     document.querySelector('button').addEventListener('click', () => {
//       const item0 = document.querySelectorAll('li')[0];
//       const copy = item0.cloneNode(true);

//       const ul = document.querySelector('ul');
//       const item2 = document.querySelectorAll('li')[2];
//       ul.insertBefore(copy, item2);
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//       const item1 = document.querySelectorAll('li')[1];

//       // item1.remove(); // 一部の古いブラウザでは機能しない

//       // 親Node.removeChild(削除するNode) // こちらは古いブラウザでも機能する
//       document.querySelector('ul').removeChild(item1);
//     });
// }

// {
//     document.querySelector('button').addEventListener('click', () => {
//       const text = document.querySelector('input');
//       const li = document.createElement('li');
//       li.textContent = text.value;

//       const ul = document.querySelector('ul');
//       ul.appendChild(li);

//       text.value ='';
//       text.focus();

//     });
// }

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li')
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;

//     document.querySelector('ul').appendChild(li);
//   });
// }

// {
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     let selectedColor; // ここで変数の箱を用意するのはifでtrueだった時のcolor.valueを置く箱がないから

//     colors.forEach(color => {
//       if(color.checked === true) {
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);

//   });
// }

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];

//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColors.push(color.value);
//       }
//     });

//     const li = document.createElement('li');
//     // li.textContent = selectedColors.join(',');
//     li.textContent = selectedColors;
//     document.querySelector('ul').appendChild(li);
//   });
// }

// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Double Clicked!');
//   });

//   // document.addEventListener('mousemove', e => {
//   //   // console.log('moved!');
//   //   console.log(e.clientX, e.clientY);
//   // });
  
//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }

// {
//   const text = document.querySelector('textarea');

//   // text.addEventListener('focus', () => {
//   //   console.log('focus');
//   // });
 
//   // text.addEventListener('blur', () => {
//   //   console.log('blur');
 
//     text.addEventListener('input', () => {
//     // console.log('input');
//     console.log(text.value.length);
    
//   });
 
//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }

// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault(); // 既定の動作をキャンセルできる。この場合、submitを押した時のブラウザ更新のキャンセル
//     console.log('Submit!')
//   });
// }

// {
//   document.querySelector('ul').addEventListener('click', e => {
//     if (e.target.nodeName === 'LI') {
//       e.target.classList.toggle('done');
//     }
//   });
// }

