const grid = document.querySelector('.grid');
const form = document.createElement('form');
form.setAttribute('action', '#');
grid.insertAdjacentElement('afterend', form);

const divForSelect = document.createElement('div');
form.insertAdjacentElement('afterbegin', divForSelect);
divForSelect.classList.add('flex');

const divForInput = document.createElement('div');
divForSelect.insertAdjacentElement('afterend', divForInput);
divForInput.classList.add('column');

const formButton = document.createElement('button');
formButton.setAttribute('type', 'submit');
form.insertAdjacentElement('beforeend', formButton);
formButton.classList.add('button');
formButton.textContent = 'Отправить';

createInput();

function createInput() {
  for(let i = 0; i < 2; i++) {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.classList.add('input');

    divForInput.insertAdjacentElement('afterbegin', input);
  }
}

createForm();

function createForm() {
  for(let i = 0; i < 5; i++) {
    const select = document.createElement('select');
    select.classList.add('select');
    divForSelect.insertAdjacentElement('afterbegin', select);

    let content = `
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    `
    select.insertAdjacentHTML('afterbegin', content);
  }
}

formButton.addEventListener('click', (event) => {
  event.preventDefault();
});

