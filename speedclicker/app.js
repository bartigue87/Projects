const h1 = document.querySelector('.h1');
const btn = document.getElementById('btn');

let count = 0;

btn.addEventListener('click', function () {
  console.log('click');
  count++;
  h1.textContent = count;
  localStorage.setItem('count', count);
});

const newCount = localStorage.getItem('count');
count = newCount;
h1.textContent = count;
