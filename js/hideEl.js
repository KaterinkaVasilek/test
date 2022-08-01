const btnHide = document.querySelector('.btn-warning');
const header = document.querySelector('.grid__item1');

btnHide.addEventListener('click', () => {
  header.classList.toggle('hidden');
});