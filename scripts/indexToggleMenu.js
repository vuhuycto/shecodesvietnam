let toggle = false;

const menuBtn = document.querySelector('.menu-icon');
const barsOfMenuBtn = document.querySelectorAll('.menu-icon__bar');
const menuDetails = document.querySelector('nav ul');

menuBtn.addEventListener('click', function() {
  if (toggle) {
    menuDetails.style.display = 'none';
    barsOfMenuBtn[0].style.display = 'block';
    barsOfMenuBtn[2].style.display = 'block';
    toggle = false;
  } else {
    menuDetails.style.display = 'block';
    barsOfMenuBtn[0].style.display = 'none';
    barsOfMenuBtn[2].style.display = 'none';
    toggle = true;
  }
});