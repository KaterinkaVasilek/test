const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

function showPopup() {
  popup.style.visibility = 'visible';
  popup.style.opacity = '1';
  popup.style.transition = 'all 0.8s ease 0s';
}

setTimeout(showPopup, 500);

close.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
})