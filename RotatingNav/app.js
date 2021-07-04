const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', function () {
  console.log(container.classList);
  container.classList.add('show-nav');
  console.log(container.classList);
});

close.addEventListener('click', function () {
  container.classList.remove('show-nav');
});
