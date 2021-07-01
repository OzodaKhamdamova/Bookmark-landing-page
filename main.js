var elModal = document.querySelector('.modal');
var elLoginButton = document.querySelector('.login-button');

elLoginButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  elModal.classList.add('modal--open');
});