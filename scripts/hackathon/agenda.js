const expandBtn = document.querySelector('.expand-btn');
const arrow = document.querySelector('.arrow');
let isExpanded = false;
const day1Agenda = document.querySelector('.agenda__day-1');
const day2Agenda = document.querySelector('.agenda__day-2');

function onExpand() {
  if (isExpanded) {
    arrow.className = 'arrow down';
    day1Agenda.style.display = 'none';
    day2Agenda.style.display = 'none';
    isExpanded = false;
  } else {
    arrow.className = 'arrow up';
    day1Agenda.style.display = 'block';
    day2Agenda.style.display = 'block';
    isExpanded = true;
  }
}

expandBtn.addEventListener('click', onExpand);