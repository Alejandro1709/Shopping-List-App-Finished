function addItem() {
  let input = document.getElementById('input__box').value;

  if (input === '') {
    alert('Please Enter Some Text');
  } else {
    console.log(input);
  }
  document.getElementById('input__box').value = '';
}

function checkKey(e) {
  if (e.keyCode === 13) {
    addItem();
  }
}
