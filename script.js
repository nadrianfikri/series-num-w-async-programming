const oddShow = document.getElementById('odd-show');
const evenShow = document.getElementById('even-show');

const synchronousBtn = document.getElementById('sync-btn');
const asynchronousBtn = document.getElementById('async-btn');

const inputNumber = document.getElementById('number-input');

synchronousBtn.addEventListener('click', () => {
  let odd = [];
  let even = [];

  for (let i = 1; i <= inputNumber.value; i++) {
    if (i % 2 === 0) {
      even.push(i);
      evenNum = even.join('  ');

      evenShow.innerHTML = evenNum;
    } else {
      odd.push(i);
      oddNum = odd.join('  ');

      oddShow.innerHTML = oddNum;
    }
  }
});

asynchronousBtn.addEventListener('click', () => {
  let odd = [];
  let even = [];

  for (let i = 1; i <= inputNumber.value; i++) {
    if (i % 2 === 0) {
      even.push(i);
      evenNum = even.join('  ');

      evenShow.innerHTML = evenNum;
    }
  }
});
// let i = 0;
// setInterval(() => {
//   if (i <= inputValue) {
//     if (i % 2 !== 0) {
//       odd.push(i);
//       oddString = odd.join(' ');
//       oddShowElm.innerHTML = oddString;
//     }
//     i++;
//   }
// }, 500);

// let j = 0;
// setInterval(() => {
//   if (j <= inputValue)
//     if (j % 2 === 0) {
//       even.push(j);
//       evenString = even.join(' ');
//       evenShowElm.innerHTML = evenString;
//     }
//   j++;
// }, 300);
