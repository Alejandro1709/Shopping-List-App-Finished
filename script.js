window.onload = () => {
  //load saved data from local storage
};

function getInputText() {
  let input = document.getElementById('input__box').value;

  if (input === '') {
    alert('Please Enter Some Text');
  } else {
    saveItem(input);
  }
  document.getElementById('input__box').value = '';
}

function checkKey(e) {
  if (e.keyCode === 13) {
    getInputText();
  }
}

function saveItem(text) {
  var content = '';

  content += `
  <div class="list__item">
  <div class="item__info">
    <div class="item__title">${text}</div>
  </div>
</div>
  `;

  document.getElementsByClassName('list')[0].innerHTML += content;

  console.log(text);
}
