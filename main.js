const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('email'));
}

