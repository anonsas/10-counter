const counterValue = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let counter = 0;

btns.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (btn.textContent === 'decrease') {
      counter--;
      colorChange();
    } else if (btn.textContent === 'reset') {
      counter = 0;
      colorChange();
    } else {
      counter++;
      colorChange();
    }
    counterValue.textContent = counter;
  })
);

function colorChange() {
  if (counter === 0) {
    counterValue.style.color = '#617D98';
  } else if (counter < 0) {
    counterValue.style.color = 'var(--clr-red-dark)';
  } else {
    counterValue.style.color = 'var(--clr-green-dark)';
  }
}
