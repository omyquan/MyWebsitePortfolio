
const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu ul');

menu.addEventListener('click', function() {
  menuLinks.classList.toggle('active');
});
