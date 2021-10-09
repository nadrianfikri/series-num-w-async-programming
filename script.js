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

  let i = 1;
  setInterval(() => {
    if (i <= inputNumber.value) {
      if (i % 2 !== 0) {
        odd.push(i);
        oddNum = odd.join(' ');
        oddShow.innerHTML = oddNum;
      }
      i++;
    }
  }, 200);

  let j = 1;
  setInterval(() => {
    if (j <= inputNumber.value)
      if (j % 2 === 0) {
        even.push(j);
        evenNum = even.join(' ');
        evenShow.innerHTML = evenNum;
      }
    j++;
  }, 400);
});
