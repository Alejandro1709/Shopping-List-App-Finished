let input = document.getElementById('input__box');
var items = [];

window.onload = () => {
  getFromLocalStorage();
};

function saveItem() {
  addItem(input.value);
}

function addItem(item) {
  if (item === '') {
    alert('Please Enter Some Text');
  } else {
    let itm = {
      id: Date.now(),
      name: item,
      completed: false,
    };

    items.push(itm);

    addToLocalStorage(items);

    input.value = '';
  }
}

function renderItems(items) {
  let content = '';

  items.forEach((item) => {
    content += `
    <div class="list__item">
    <div class="item__info">
      <div class="item__title">${item.name}</div>
    </div>
  </div>
    `;
  });
  document.getElementsByClassName('list')[0].innerHTML = content;
}

function addToLocalStorage(items) {
  localStorage.setItem('items', JSON.stringify(items));

  renderItems(items);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('items');

  if (reference) {
    items = JSON.parse(reference);
    renderItems(items);
  }
}

function checkKey(e) {
  if (e.keyCode === 13) {
    saveItem();
  }
}
