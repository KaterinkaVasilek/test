const btnReplace = document.querySelector('.btn-success');
const blocks = document.querySelectorAll('.grid__item');

btnReplace.addEventListener('click', () => {
  blocks[1].classList.toggle('replace-left');
  blocks[2].classList.toggle('replace-right');
});
