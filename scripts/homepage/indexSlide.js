const events = document.querySelectorAll('.event');
events[0].className = 'event active';
let eventCount = 1;

const slideButton = document.querySelector('.button-container');

slideButton.addEventListener('click', function(e) {
  const btnType = e.target.getAttribute('class');

  if (btnType === 'left') {
    if (eventCount === 1) {
      events[eventCount - 1].className = 'event';
      events[eventCount - 1].setAttribute('aria-disabled', 'true');
      eventCount = events.length;
      events[eventCount - 1].className = 'event active';
      events[eventCount - 1].setAttribute('aria-disabled', 'false');
    }
    
    events[eventCount - 1].className = 'event';
    events[eventCount - 1].setAttribute('aria-disabled', 'true');
    eventCount--;
    events[eventCount - 1].className = 'event active';
    events[eventCount - 1].setAttribute('aria-disabled', 'false');
  } else {
    if (eventCount === events.length) {
      events[eventCount - 1].className = 'event';
      events[eventCount - 1].setAttribute('aria-disabled', 'true');
      eventCount = 1;
      events[eventCount - 1].className = 'event active';
      events[eventCount - 1].setAttribute('aria-disabled', 'false');
    }
    
    events[eventCount - 1].className = 'event';
    events[eventCount - 1].setAttribute('aria-disabled', 'true');
    eventCount++;
    events[eventCount - 1].className = 'event active';
    events[eventCount - 1].setAttribute('aria-disabled', 'false');
  }
});

