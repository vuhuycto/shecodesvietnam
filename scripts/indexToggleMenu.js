let toggle = false;

const menuBtn = document.querySelector('.menu-icon');
const barsOfMenuBtn = document.querySelectorAll('.menu-icon__bar');
const menuDetails = document.querySelector('nav ul');

function displayMenuBtn(detailsDisplay, barsDisplay) {
  if (detailsDisplay === 'none') {
    toggle = false;
  } else {
    toggle = true;
  }

  menuDetails.style.display = detailsDisplay;
  barsOfMenuBtn[0].style.display = barsDisplay;
  barsOfMenuBtn[2].style.display = barsDisplay;
}

function onToggleMenu() {
  if (toggle) {
    displayMenuBtn('none', 'block');
  } else {
    displayMenuBtn('block', 'none');
  }
}

menuBtn.addEventListener('click', onToggleMenu);