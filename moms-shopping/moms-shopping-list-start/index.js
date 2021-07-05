const form = document.addItem;
const input = form.title;
const list = document.getElementById('list');
console.log(list.length);

{
  /* <li>
                    <div>Milk</div>
                    <button>edit</button>
                    <button>X</button>
</li> */
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTitle = input.value;
  const li = document.createElement('li');
  const div = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.id = 'edit';
  const xBtn = document.createElement('button');
  xBtn.id = 'x';
  div.textContent = newTitle;
  editBtn.textContent = 'edit';
  xBtn.textContent = 'X';
  li.appendChild(div);
  li.appendChild(editBtn);
  li.appendChild(xBtn);
  list.appendChild(li);
});

list.addEventListener('click', function (e) {
  if (e.target.id === 'x') {
    console.log(e.target);
    const list = e.target.parentNode;
    const unordered = list.parentNode;
    unordered.removeChild(list);
  }
});

list.addEventListener('click', function (e) {
  const listItem = document.querySelector('ul div');
  if (e.target.id === 'edit') {
    listItem.contentEditable = true;
    const save = document.getElementById('edit');
    save.textContent = 'save';
    save.id = 'save';
  }
});
