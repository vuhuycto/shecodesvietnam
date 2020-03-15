const yearTab = document.querySelector('.year-tab');
const locationTab = document.querySelector('.location-tab');
const years = document.querySelectorAll('.year-tab li');
const locations = document.querySelectorAll('.location-tab li');
let currentYear = document.querySelector('.year-tab__active').textContent;
let currentLocation = document.querySelector('.location-tab__active').textContent === 'HÀ NỘI' ? 'hanoi' : 'hcm';
const panels = document.querySelectorAll('.panels__item');

function onChangeTab(target, attr, activeAttr) {
  if (target.getAttribute('class') === activeAttr || target.tagName === 'UL') {
    return;
  }
  
  if (attr === 'year') {
    years.forEach(function(value) {
      if (value.getAttribute('class') === activeAttr) {
        value.setAttribute('class', '');
        value.setAttribute('aria-selected', 'false');
      }
    });

    target.setAttribute('class', activeAttr);
    target.setAttribute('aria-selected', 'true');

    currentYear = target.textContent;
  } else if (attr === 'location') {
    locations.forEach(function(value) {
      if (value.getAttribute('class') === activeAttr) {
        value.setAttribute('class', '');
        value.setAttribute('aria-selected', 'false');
      }
    });
    
    target.setAttribute('class', activeAttr);
    target.setAttribute('aria-selected', 'true');
  
    currentLocation = target.textContent === 'HÀ NỘI' ? 'hanoi' : 'hcm';
  }

  const currentPanel = document.querySelector('.' + currentLocation + '-' + currentYear);

  panels.forEach(function(value) {
    if (value.className.includes('panels__active')) {
      value.setAttribute('class', value.className.substring(0, value.className.indexOf('panels__active') + 1));
      value.setAttribute('aria-hidden', 'true');
    }
  }); 

  currentPanel.setAttribute('class', currentPanel.className + ' panels__active');
  currentPanel.setAttribute('aria-hidden', 'false');
}

function onChangeYearTab(e) {
  onChangeTab(e.target, 'year', 'year-tab__active');
}

function onChangeLocationTab(e) {
  onChangeTab(e.target, 'location', 'location-tab__active');
}

yearTab.addEventListener('click', onChangeYearTab);
locationTab.addEventListener('click', onChangeLocationTab);