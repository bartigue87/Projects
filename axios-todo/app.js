const form = document['form'];
const title = form['title'];
const description = form['description'];
const price = form['price'];
let container = document.querySelector('.container');
const button = document.querySelectorAll('.button');

function getData() {
  axios
    .get('https://api.vschool.io/brandonartigue/todo')
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

function listData(data) {
  clearList();
  for (let i = 0; i < data.length; i++) {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'DELETE';
    h1.textContent = data[i].title;
    h1.appendChild(button);
    p.textContent = data[i].description;
    container.appendChild(h1);
    container.appendChild(p);
  }
}

function clearList() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

getData();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const newTodo = {
    title: title.value,
    description: description.value,
    price: price.value,
  };

  form.title.value = '';
  form.description.value = '';
  form.price.value = '';

  axios
    .post('https://api.vschool.io/brandonartigue/todo', newTodo)
    .then((res) => getData())
    .catch((err) => console.log(err));
});
